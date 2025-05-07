import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { CreateTaxReturnDto } from './dto/create-tax-return.dto';
import { Revenue } from '../revenue/revenue.model';
import { Asset } from '../assets/assets.model';
import { Debt } from '../debts/debts.model';
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
    @InjectModel(Asset)
    private assetModel: typeof Asset,
    @InjectModel(Debt)
    private debtModel: typeof Debt,
    private sequelize: Sequelize,
  ) {}

  async findAll(userUuid: string): Promise<TaxReturn[]> {
    return this.taxReturnModel.findAll({
      // TODO for demonstration purposes, uncomment this line when implementing real authentication and real userUuid comes from the authenticated user
      // where: { userUuid },
      include: [Revenue, Asset, Debt],
    });
  }

  async findOne(id: number, transaction?: Transaction): Promise<TaxReturn> {
    const taxReturn = await this.taxReturnModel.findByPk(id, {
      include: [Revenue, Asset, Debt],
      transaction,
    });

    if (!taxReturn) {
      throw new NotFoundException(`Tax return with ID ${id} not found`);
    }

    return taxReturn;
  }

  async create(
    createTaxReturnDto: CreateTaxReturnWithUserUuidDto,
  ): Promise<TaxReturn> {
    const { revenues, assets, debts, ...taxReturnData } = createTaxReturnDto;

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

      if (assets?.length) {
        await this.assetModel.bulkCreate(
          assets.map((asset) => ({
            ...asset,
            description: asset.description,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      if (debts?.length) {
        await this.debtModel.bulkCreate(
          debts.map((debt) => ({
            ...debt,
            description: debt.description.items,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      return this.findOne(taxReturn.id, transaction);
    });
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

      // Create new assets
      if (updateTaxReturnDto.createAssets?.length) {
        await this.assetModel.bulkCreate(
          updateTaxReturnDto.createAssets.map((asset) => ({
            ...asset,
            description: asset.description,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      // Update existing assets
      if (updateTaxReturnDto.updateAssets?.length) {
        await Promise.all(
          updateTaxReturnDto.updateAssets.map(async (asset) => {
            const { id: assetId, ...updateData } = asset;
            await this.assetModel.update(
              {
                ...updateData,
                description: updateData.description,
              },
              {
                where: { id: assetId, taxReturnId: taxReturn.id },
                transaction,
              },
            );
          }),
        );
      }

      // Delete assets
      if (updateTaxReturnDto.deleteAssetIds?.length) {
        await this.assetModel.destroy({
          where: {
            id: updateTaxReturnDto.deleteAssetIds,
            taxReturnId: taxReturn.id,
          },
          transaction,
        });
      }

      // Create new debts
      if (updateTaxReturnDto.createDebts?.length) {
        await this.debtModel.bulkCreate(
          updateTaxReturnDto.createDebts.map((debt) => ({
            ...debt,
            description: debt.description.items,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      // Update existing debts
      if (updateTaxReturnDto.updateDebts?.length) {
        await Promise.all(
          updateTaxReturnDto.updateDebts.map(async (debt) => {
            const { id: debtId, ...updateData } = debt;
            await this.debtModel.update(
              {
                ...updateData,
                description: updateData.description?.items,
              },
              {
                where: { id: debtId, taxReturnId: taxReturn.id },
                transaction,
              },
            );
          }),
        );
      }

      // Delete debts
      if (updateTaxReturnDto.deleteDebtIds?.length) {
        await this.debtModel.destroy({
          where: {
            id: updateTaxReturnDto.deleteDebtIds,
            taxReturnId: taxReturn.id,
          },
          transaction,
        });
      }

      return this.findOne(id, transaction);
    });
  }

  async remove(id: number): Promise<boolean> {
    const taxReturn = await this.findOne(id);
    await taxReturn.destroy();
    return true;
  }
}
