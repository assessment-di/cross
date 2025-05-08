import { TaxReturn } from './tax-return.model';
import { Revenue } from '../revenue/revenue.model';
import { Asset } from '../assets/assets.model';
import { Debt } from '../debts/debts.model';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { sequelize } from '../../test/setup';

describe('TaxReturn Model', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create an instance', async () => {
    const taxReturn = await TaxReturn.create({
      userUuid: '123e4567-e89b-12d3-a456-426614174000',
    });
    expect(taxReturn).toBeDefined();
    expect(taxReturn.userUuid).toBe('123e4567-e89b-12d3-a456-426614174000');
  });

  it('should have correct table name', () => {
    expect(TaxReturn.tableName).toBe('tax_returns');
  });

  it('should have correct column definitions', () => {
    const attributes = TaxReturn.rawAttributes;

    expect(attributes.id).toBeDefined();
    expect(attributes.id.type).toBeDefined();
    expect(attributes.id.primaryKey).toBe(true);
    expect(attributes.id.autoIncrement).toBe(true);

    expect(attributes.userUuid).toBeDefined();
    expect(attributes.userUuid.allowNull).toBe(false);

    expect(attributes.createdAt).toBeDefined();
    expect(attributes.createdAt.field).toBe('created_at');

    expect(attributes.updatedAt).toBeDefined();
    expect(attributes.updatedAt.field).toBe('updated_at');
  });

  it('should have correct associations', () => {
    const associations = TaxReturn.associations;

    expect(associations.revenues).toBeDefined();
    expect(associations.revenues.target).toBe(Revenue);

    expect(associations.assets).toBeDefined();
    expect(associations.assets.target).toBe(Asset);

    expect(associations.debts).toBeDefined();
    expect(associations.debts.target).toBe(Debt);
  });

  it('should create a tax return with valid data', async () => {
    const taxReturnData = {
      userUuid: '123e4567-e89b-12d3-a456-426614174000',
    };

    const taxReturn = await TaxReturn.create(taxReturnData);

    expect(taxReturn.userUuid).toBe(taxReturnData.userUuid);
    expect(taxReturn.id).toBeDefined();
    expect(taxReturn.createdAt).toBeDefined();
    expect(taxReturn.updatedAt).toBeDefined();
  });
});
