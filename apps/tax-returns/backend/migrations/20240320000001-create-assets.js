'use strict';

const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    // Create assets table
    await queryInterface.createTable('assets', {
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
        type: DataTypes.ENUM('REAL_ESTATE', 'CARS'),
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
    await queryInterface.dropTable('assets');

    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS enum_assets_type;',
    );
  },
};
