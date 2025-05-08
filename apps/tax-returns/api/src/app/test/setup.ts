import { Sequelize } from 'sequelize-typescript';
import { TaxReturn } from '../modules/tax-return/tax-return.model';
import { Revenue } from '../modules/revenue/revenue.model';
import { Asset } from '../modules/assets/assets.model';
import { Debt } from '../modules/debts/debts.model';
import { beforeAll, afterAll, afterEach, jest } from '@jest/globals';

export let sequelize: Sequelize;

beforeAll(async () => {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  });

  sequelize.addModels([TaxReturn, Revenue, Asset, Debt]);
  await sequelize.sync({ force: true });
});

afterEach(async () => {
  await sequelize.truncate({ cascade: true });
  await sequelize.sync({ force: true });
  jest.clearAllMocks();
});

afterAll(async () => {
  if (sequelize) {
    await sequelize.truncate({ cascade: true });
    await sequelize.close();
  }
  jest.clearAllMocks();
});
