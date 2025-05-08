import { Asset, AssetType, AssetDescriptionItem } from './assets.model';
import { TaxReturn } from '../tax-return/tax-return.model';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { sequelize } from '../../test/setup';

describe('Asset Model', () => {
  let taxReturn: TaxReturn;

  beforeEach(async () => {
    await sequelize.sync({ force: true });
    taxReturn = await TaxReturn.create({
      userUuid: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  it('should create an instance', async () => {
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
    expect(asset).toBeDefined();
    expect(asset.type).toBe(AssetType.REAL_ESTATE);
  });

  it('should have correct table name', () => {
    expect(Asset.tableName).toBe('assets');
  });

  it('should have correct column definitions', () => {
    const attributes = Asset.rawAttributes;

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
    const associations = Asset.associations;

    expect(associations.taxReturn).toBeDefined();
    expect(associations.taxReturn.target).toBe(TaxReturn);
  });

  it('should create an asset with valid data', async () => {
    const assetData = {
      taxReturnId: taxReturn.id,
      type: AssetType.REAL_ESTATE,
      description: [
        {
          title: 'Property Address',
          title_value: '123 Main St',
          index: 0,
        },
        {
          title: 'Property Value',
          value: 1000000,
          currency: 'ISK',
          index: 1,
        },
      ] as AssetDescriptionItem[],
    };

    const asset = await Asset.create(assetData);

    expect(asset.taxReturnId).toBe(assetData.taxReturnId);
    expect(asset.type).toBe(assetData.type);
    expect(asset.description).toEqual(assetData.description);
    expect(asset.id).toBeDefined();
    expect(asset.createdAt).toBeDefined();
    expect(asset.updatedAt).toBeDefined();
  });

  it('should validate asset type enum values', () => {
    expect(Object.values(AssetType)).toContain(AssetType.REAL_ESTATE);
    expect(Object.values(AssetType)).toContain(AssetType.CARS);
  });

  it('should validate AssetDescriptionItem structure', () => {
    const descriptionItem: AssetDescriptionItem = {
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
