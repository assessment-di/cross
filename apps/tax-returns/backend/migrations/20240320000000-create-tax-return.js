'use strict';

const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    // Create tax_returns table
    await queryInterface.createTable('tax_returns', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
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

    // Create revenues table
    await queryInterface.createTable('revenues', {
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
        type: DataTypes.ENUM(
          'SALARY_AND_PAYMENTS',
          'VEHICLE_ALLOWANCE',
          'PENSION_PAYMENTS',
        ),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      currency: {
        type: DataTypes.ENUM('ISK'),
        allowNull: false,
        defaultValue: 'ISK',
      },
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
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
    await queryInterface.dropTable('revenues');
    await queryInterface.dropTable('tax_returns');

    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS enum_revenues_type;',
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS enum_revenues_currency;',
    );
  },
};
