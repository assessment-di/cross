import { TaxReturn } from './tax-return.model';
import { Revenue, RevenueType, RevenueCurrency } from '../revenue/revenue.model';
import { Asset, AssetType } from '../assets/assets.model';
import { Debt, DebtType } from '../debts/debts.model';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { sequelize } from '../../test/setup';

describe('TaxReturn Integration Tests', () => {
  let taxReturn: TaxReturn;

  beforeEach(async () => {
    await sequelize.sync({ force: true });
    taxReturn = await TaxReturn.create({
      userUuid: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  it('should create a tax return with associated revenues', async () => {
    const revenue = await Revenue.create({
      taxReturnId: taxReturn.id,
      type: RevenueType.SALARY_AND_PAYMENTS,
      description: 'Monthly salary',
      currency: RevenueCurrency.ISK,
      value: 500000,
    });

    const taxReturnWithRevenue = await TaxReturn.findByPk(taxReturn.id, {
      include: [Revenue],
    });

    expect(taxReturnWithRevenue).toBeDefined();
    expect(taxReturnWithRevenue?.revenues).toHaveLength(1);
    expect(taxReturnWithRevenue?.revenues[0].id).toBe(revenue.id);
    expect(taxReturnWithRevenue?.revenues[0].type).toBe(RevenueType.SALARY_AND_PAYMENTS);
  });

  it('should create a tax return with associated assets', async () => {
    const asset = await Asset.create({
      taxReturnId: taxReturn.id,
      type: AssetType.REAL_ESTATE,
      description: [
        {
          title: 'Property Address',
          title_value: '123 Main St',
          index: 0,
        },
      ],
    });

    const taxReturnWithAsset = await TaxReturn.findByPk(taxReturn.id, {
      include: [Asset],
    });

    expect(taxReturnWithAsset).toBeDefined();
    expect(taxReturnWithAsset?.assets).toHaveLength(1);
    expect(taxReturnWithAsset?.assets[0].id).toBe(asset.id);
    expect(taxReturnWithAsset?.assets[0].type).toBe(AssetType.REAL_ESTATE);
  });

  it('should create a tax return with associated debts', async () => {
    const debt = await Debt.create({
      taxReturnId: taxReturn.id,
      type: DebtType.INTEREST_EXPENSES,
      description: [
        {
          title: 'Loan Type',
          title_value: 'Mortgage',
          index: 0,
        },
      ],
    });

    const taxReturnWithDebt = await TaxReturn.findByPk(taxReturn.id, {
      include: [Debt],
    });

    expect(taxReturnWithDebt).toBeDefined();
    expect(taxReturnWithDebt?.debts).toHaveLength(1);
    expect(taxReturnWithDebt?.debts[0].id).toBe(debt.id);
    expect(taxReturnWithDebt?.debts[0].type).toBe(DebtType.INTEREST_EXPENSES);
  });

  it('should create a tax return with multiple associated entities', async () => {
    // Create revenue
    await Revenue.create({
      taxReturnId: taxReturn.id,
      type: RevenueType.SALARY_AND_PAYMENTS,
      description: 'Monthly salary',
      currency: RevenueCurrency.ISK,
      value: 500000,
    });

    // Create asset
    await Asset.create({
      taxReturnId: taxReturn.id,
      type: AssetType.REAL_ESTATE,
      description: [
        {
          title: 'Property Address',
          title_value: '123 Main St',
          index: 0,
        },
      ],
    });

    // Create debt
    await Debt.create({
      taxReturnId: taxReturn.id,
      type: DebtType.INTEREST_EXPENSES,
      description: [
        {
          title: 'Loan Type',
          title_value: 'Mortgage',
          index: 0,
        },
      ],
    });

    const taxReturnWithAll = await TaxReturn.findByPk(taxReturn.id, {
      include: [Revenue, Asset, Debt],
    });

    expect(taxReturnWithAll).toBeDefined();
    expect(taxReturnWithAll?.revenues).toHaveLength(1);
    expect(taxReturnWithAll?.assets).toHaveLength(1);
    expect(taxReturnWithAll?.debts).toHaveLength(1);
  });

  it('should cascade delete associated entities when tax return is deleted', async () => {
    // Create associated entities
    await Revenue.create({
      taxReturnId: taxReturn.id,
      type: RevenueType.SALARY_AND_PAYMENTS,
      description: 'Monthly salary',
      currency: RevenueCurrency.ISK,
      value: 500000,
    });

    await Asset.create({
      taxReturnId: taxReturn.id,
      type: AssetType.REAL_ESTATE,
      description: [
        {
          title: 'Property Address',
          title_value: '123 Main St',
          index: 0,
        },
      ],
    });

    await Debt.create({
      taxReturnId: taxReturn.id,
      type: DebtType.INTEREST_EXPENSES,
      description: [
        {
          title: 'Loan Type',
          title_value: 'Mortgage',
          index: 0,
        },
      ],
    });

    // Delete tax return
    await taxReturn.destroy();

    // Check if associated entities are deleted
    const revenues = await Revenue.findAll({ where: { taxReturnId: taxReturn.id } });
    const assets = await Asset.findAll({ where: { taxReturnId: taxReturn.id } });
    const debts = await Debt.findAll({ where: { taxReturnId: taxReturn.id } });

    expect(revenues).toHaveLength(0);
    expect(assets).toHaveLength(0);
    expect(debts).toHaveLength(0);
  });
}); 