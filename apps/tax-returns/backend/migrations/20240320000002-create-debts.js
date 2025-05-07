'use strict';

const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    // Create debts table
    await queryInterface.createTable('debts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tax_return_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tax_returns',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      type: {
        type: DataTypes.ENUM('INTEREST_EXPENSES', 'OTHER'),
        allowNull: false,
      },
      description: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('debts');

    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS enum_debts_type;',
    );
  },
}; 