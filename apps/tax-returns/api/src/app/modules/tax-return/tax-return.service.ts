import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { CreateTaxReturnInput } from './dto/create-tax-return.dto';
import { Revenue } from '../revenue/revenue.model';
import { Asset } from '../assets/assets.model';
import { Debt } from '../debts/debts.model';
import { UpdateTaxReturnInput } from './dto/update-tax-return.dto';
import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

interface CreateTaxReturnWithUserUuidDto extends CreateTaxReturnInput {
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
    CreateTaxReturnInput: CreateTaxReturnWithUserUuidDto,
  ): Promise<TaxReturn> {
    const { revenues, assets, debts, ...taxReturnData } = CreateTaxReturnInput;

    return this.sequelize.transaction(async (transaction) => {
      const taxReturn = await this.taxReturnModel.create(taxReturnData, {
        transaction,
      });

      if (!taxReturn || !taxReturn.userUuid) {
        throw new InternalServerErrorException('Failed to create tax return')
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
            description: debt.description,
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
    UpdateTaxReturnInput: UpdateTaxReturnInput,
  ): Promise<TaxReturn> {
    return this.sequelize.transaction(async (transaction) => {
      const taxReturn = await this.findOne(id, transaction);

      // Create new revenues
      if (UpdateTaxReturnInput.createRevenues?.length) {
        await this.revenueModel.bulkCreate(
          UpdateTaxReturnInput.createRevenues.map((revenue) => ({
            ...revenue,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      // Update existing revenues
      if (UpdateTaxReturnInput.updateRevenues?.length) {
        await Promise.all(
          UpdateTaxReturnInput.updateRevenues.map(async (revenue) => {
            const { id: revenueId, ...updateData } = revenue;
            await this.revenueModel.update(updateData, {
              where: { id: revenueId, taxReturnId: taxReturn.id },
              transaction,
            });
          }),
        );
      }

      // Delete revenues
      if (UpdateTaxReturnInput.deleteRevenueIds?.length) {
        await this.revenueModel.destroy({
          where: {
            id: UpdateTaxReturnInput.deleteRevenueIds,
            taxReturnId: taxReturn.id,
          },
          transaction,
        });
      }

      // Create new assets
      if (UpdateTaxReturnInput.createAssets?.length) {
        await this.assetModel.bulkCreate(
          UpdateTaxReturnInput.createAssets.map((asset) => ({
            ...asset,
            description: asset.description,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      // Update existing assets
      if (UpdateTaxReturnInput.updateAssets?.length) {
        await Promise.all(
          UpdateTaxReturnInput.updateAssets.map(async (asset) => {
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
      if (UpdateTaxReturnInput.deleteAssetIds?.length) {
        await this.assetModel.destroy({
          where: {
            id: UpdateTaxReturnInput.deleteAssetIds,
            taxReturnId: taxReturn.id,
          },
          transaction,
        });
      }

      // Create new debts
      if (UpdateTaxReturnInput.createDebts?.length) {
        await this.debtModel.bulkCreate(
          UpdateTaxReturnInput.createDebts.map((debt) => ({
            ...debt,
            description: debt.description,
            taxReturnId: taxReturn.id,
          })),
          { transaction },
        );
      }

      // Update existing debts
      if (UpdateTaxReturnInput.updateDebts?.length) {
        await Promise.all(
          UpdateTaxReturnInput.updateDebts.map(async (debt) => {
            const { id: debtId, ...updateData } = debt;
            await this.debtModel.update(
              {
                ...updateData,
                description: updateData.description,
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
      if (UpdateTaxReturnInput.deleteDebtIds?.length) {
        await this.debtModel.destroy({
          where: {
            id: UpdateTaxReturnInput.deleteDebtIds,
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
