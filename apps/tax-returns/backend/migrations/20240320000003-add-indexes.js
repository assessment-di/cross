'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.addIndex('tax_returns', ['user_uuid'], {
      name: 'idx_tax_returns_user_uuid',
    });

    await queryInterface.addIndex('revenues', ['tax_return_id'], {
      name: 'idx_revenues_tax_return_id',
    });

    await queryInterface.addIndex('assets', ['tax_return_id'], {
      name: 'idx_assets_tax_return_id',
    });

    await queryInterface.addIndex('debts', ['tax_return_id'], {
      name: 'idx_debts_tax_return_id',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeIndex('tax_returns', 'idx_tax_returns_user_uuid');
    await queryInterface.removeIndex('revenues', 'idx_revenues_tax_return_id');
    await queryInterface.removeIndex('assets', 'idx_assets_tax_return_id');
    await queryInterface.removeIndex('debts', 'idx_debts_tax_return_id');
  },
};
