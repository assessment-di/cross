import { Revenue, RevenueType, RevenueCurrency } from './revenue.model';
import { TaxReturn } from '../tax-return/tax-return.model';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { sequelize } from '../../test/setup';

describe('Revenue Model', () => {
  let taxReturn: TaxReturn;

  beforeEach(async () => {
    await sequelize.sync({ force: true });
    taxReturn = await TaxReturn.create({
      userUuid: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  it('should create an instance', async () => {
    const revenue = await Revenue.create({
      taxReturnId: taxReturn.id,
      type: RevenueType.SALARY_AND_PAYMENTS,
      description: 'Monthly salary',
      currency: RevenueCurrency.ISK,
      value: 500000,
    });
    expect(revenue).toBeDefined();
    expect(revenue.type).toBe(RevenueType.SALARY_AND_PAYMENTS);
  });

  it('should have correct table name', () => {
    expect(Revenue.tableName).toBe('revenues');
  });

  it('should have correct column definitions', () => {
    const attributes = Revenue.rawAttributes;

    expect(attributes.id).toBeDefined();
    expect(attributes.id.type).toBeDefined();
    expect(attributes.id.primaryKey).toBe(true);
    expect(attributes.id.autoIncrement).toBe(true);

    expect(attributes.taxReturnId).toBeDefined();
    expect(attributes.taxReturnId.allowNull).toBe(false);

    expect(attributes.type).toBeDefined();
    expect(attributes.type.type).toBeDefined();
    expect(attributes.type.allowNull).toBe(false);

    expect(attributes.description).toBeDefined();
    expect(attributes.description.allowNull).toBe(true);

    expect(attributes.currency).toBeDefined();
    expect(attributes.currency.type).toBeDefined();
    expect(attributes.currency.allowNull).toBe(false);
    expect(attributes.currency.defaultValue).toBe(RevenueCurrency.ISK);

    expect(attributes.value).toBeDefined();
    expect(attributes.value.type).toBeDefined();
    expect(attributes.value.allowNull).toBe(false);

    expect(attributes.createdAt).toBeDefined();
    expect(attributes.createdAt.field).toBe('created_at');

    expect(attributes.updatedAt).toBeDefined();
    expect(attributes.updatedAt.field).toBe('updated_at');
  });

  it('should have correct association with TaxReturn', () => {
    const associations = Revenue.associations;

    expect(associations.taxReturn).toBeDefined();
    expect(associations.taxReturn.target).toBe(TaxReturn);
  });

  it('should create a revenue with valid data', async () => {
    const revenueData = {
      taxReturnId: taxReturn.id,
      type: RevenueType.SALARY_AND_PAYMENTS,
      description: 'Monthly salary',
      currency: RevenueCurrency.ISK,
      value: 500000,
    };

    const revenue = await Revenue.create(revenueData);

    expect(revenue.taxReturnId).toBe(revenueData.taxReturnId);
    expect(revenue.type).toBe(revenueData.type);
    expect(revenue.description).toBe(revenueData.description);
    expect(revenue.currency).toBe(revenueData.currency);
    expect(revenue.value).toBe(revenueData.value);
    expect(revenue.id).toBeDefined();
    expect(revenue.createdAt).toBeDefined();
    expect(revenue.updatedAt).toBeDefined();
  });

  it('should validate revenue type enum values', () => {
    expect(Object.values(RevenueType)).toContain(RevenueType.SALARY_AND_PAYMENTS);
    expect(Object.values(RevenueType)).toContain(RevenueType.VEHICLE_ALLOWANCE);
    expect(Object.values(RevenueType)).toContain(RevenueType.PENSION_PAYMENTS);
  });

  it('should validate currency enum values', () => {
    expect(Object.values(RevenueCurrency)).toContain(RevenueCurrency.ISK);
  });
});
