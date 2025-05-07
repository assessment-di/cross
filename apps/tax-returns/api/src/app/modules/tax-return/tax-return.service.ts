import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { CreateTaxReturnDto } from './dto/create-tax-return.dto';
import { Revenue } from '../revenue/revenue.model';
import { UpdateTaxReturnDto } from './dto/update-tax-return.dto';
import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

interface CreateTaxReturnWithUserUuidDto extends CreateTaxReturnDto {
  userUuid: string;
}

@Injectable()
export class TaxReturnService {
  constructor(
    @InjectModel(TaxReturn)
    private taxReturnModel: typeof TaxReturn,
    @InjectModel(Revenue)
    private revenueModel: typeof Revenue,
    private sequelize: Sequelize,
  ) {}

  async create(
    createTaxReturnDto: CreateTaxReturnWithUserUuidDto,
  ): Promise<TaxReturn> {
    const { revenues, ...taxReturnData } = createTaxReturnDto;

    return this.sequelize.transaction(async (transaction) => {
      const taxReturn = await this.taxReturnModel.create(taxReturnData, {
        transaction,
      });

      if (!taxReturn || !taxReturn.userUuid) {
        throw new Error('Failed to create tax return');
      }

      if (revenues?.length) {
        await this.revenueModel.bulkCreate(
          revenues.map((revenue) => ({
            ...revenue,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      return this.findOne(taxReturn.id, transaction);
    });
  }

  async findAll(userUuid: string): Promise<TaxReturn[]> {
    return this.taxReturnModel.findAll({
      // TODO for demonstration purposes, uncomment this line when implementing real authentication and real userUuid comes from the authenticated user
      // where: { userUuid },
      include: [Revenue],
    });
  }

  async findOne(id: number, transaction?: Transaction): Promise<TaxReturn> {
    const taxReturn = await this.taxReturnModel.findByPk(id, {
      include: [Revenue],
      transaction,
    });

    if (!taxReturn) {
      throw new NotFoundException(`Tax return with ID ${id} not found`);
    }

    return taxReturn;
  }

  async update(
    id: number,
    updateTaxReturnDto: UpdateTaxReturnDto,
  ): Promise<TaxReturn> {
    return this.sequelize.transaction(async (transaction) => {
      const taxReturn = await this.findOne(id, transaction);

      // Create new revenues
      if (updateTaxReturnDto.createRevenues?.length) {
        await this.revenueModel.bulkCreate(
          updateTaxReturnDto.createRevenues.map((revenue) => ({
            ...revenue,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      // Update existing revenues
      if (updateTaxReturnDto.updateRevenues?.length) {
        await Promise.all(
          updateTaxReturnDto.updateRevenues.map(async (revenue) => {
            const { id: revenueId, ...updateData } = revenue;
            await this.revenueModel.update(updateData, {
              where: { id: revenueId, taxReturnId: taxReturn.id },
              transaction,
            });
          }),
        );
      }

      // Delete revenues
      if (updateTaxReturnDto.deleteRevenueIds?.length) {
        await this.revenueModel.destroy({
          where: {
            id: updateTaxReturnDto.deleteRevenueIds,
            taxReturnId: taxReturn.id,
          },
          transaction,
        });
      }

      return this.findOne(id, transaction);
    });
  }

  async remove(id: number): Promise<void> {
    const taxReturn = await this.findOne(id);
    await taxReturn?.destroy();
  }
}
