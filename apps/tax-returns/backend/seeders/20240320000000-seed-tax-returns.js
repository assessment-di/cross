'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface) {
    // Create sample tax returns
    const taxReturns = await queryInterface.bulkInsert(
      'tax_returns',
      [
        {
          user_uuid: uuidv4(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_uuid: uuidv4(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { returning: true },
    );

    // Create sample revenues for each tax return
    const revenues = [];
    for (const taxReturn of taxReturns) {
      revenues.push(
        {
          tax_return_id: taxReturn.id,
          type: 'SALARY_AND_PAYMENTS',
          description: 'Monthly salary',
          currency: 'ISK',
          value: 550000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tax_return_id: taxReturn.id,
          type: 'VEHICLE_ALLOWANCE',
          description: 'Car allowance',
          currency: 'ISK',
          value: 60000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tax_return_id: taxReturn.id,
          type: 'PENSION_PAYMENTS',
          description: 'Pension contribution',
          currency: 'ISK',
          value: 45000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      );
    }

    await queryInterface.bulkInsert('revenues', revenues);
  },

  async down(queryInterface) {
    // Clean up the seeded data
    await queryInterface.bulkDelete('revenues', null, {});
    await queryInterface.bulkDelete('tax_returns', null, {});
  },
}; 