import { Debt, DebtType, DebtDescriptionItem } from './debts.model';
import { TaxReturn } from '../tax-return/tax-return.model';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { sequelize } from '../../test/setup';

describe('Debt Model', () => {
  let taxReturn: TaxReturn;

  beforeEach(async () => {
    await sequelize.sync({ force: true });
    taxReturn = await TaxReturn.create({
      userUuid: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  it('should create an instance', async () => {
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
    expect(debt).toBeDefined();
    expect(debt.type).toBe(DebtType.INTEREST_EXPENSES);
  });

  it('should have correct table name', () => {
    expect(Debt.tableName).toBe('debts');
  });

  it('should have correct column definitions', () => {
    const attributes = Debt.rawAttributes;

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
    expect(attributes.description.type).toBeDefined();
    expect(attributes.description.allowNull).toBe(false);
    expect(attributes.description.defaultValue).toEqual([]);

    expect(attributes.createdAt).toBeDefined();
    expect(attributes.createdAt.field).toBe('created_at');

    expect(attributes.updatedAt).toBeDefined();
    expect(attributes.updatedAt.field).toBe('updated_at');
  });

  it('should have correct association with TaxReturn', () => {
    const associations = Debt.associations;

    expect(associations.taxReturn).toBeDefined();
    expect(associations.taxReturn.target).toBe(TaxReturn);
  });

  it('should create a debt with valid data', async () => {
    const debtData = {
      taxReturnId: taxReturn.id,
      type: DebtType.INTEREST_EXPENSES,
      description: [
        {
          title: 'Loan Type',
          title_value: 'Mortgage',
          index: 0,
        },
        {
          title: 'Interest Amount',
          value: 50000,
          currency: 'ISK',
          index: 1,
        },
      ] as DebtDescriptionItem[],
    };

    const debt = await Debt.create(debtData);

    expect(debt.taxReturnId).toBe(debtData.taxReturnId);
    expect(debt.type).toBe(debtData.type);
    expect(debt.description).toEqual(debtData.description);
    expect(debt.id).toBeDefined();
    expect(debt.createdAt).toBeDefined();
    expect(debt.updatedAt).toBeDefined();
  });

  it('should validate debt type enum values', () => {
    expect(Object.values(DebtType)).toContain(DebtType.INTEREST_EXPENSES);
    expect(Object.values(DebtType)).toContain(DebtType.OTHER);
  });

  it('should validate DebtDescriptionItem structure', () => {
    const descriptionItem: DebtDescriptionItem = {
      title: 'Test Title',
      title_value: 'Test Value',
      index: 0,
      currency: 'ISK',
      value: 1000,
    };

    expect(descriptionItem).toHaveProperty('title');
    expect(descriptionItem).toHaveProperty('index');
    expect(typeof descriptionItem.title).toBe('string');
    expect(typeof descriptionItem.index).toBe('number');
  });
});
