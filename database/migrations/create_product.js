'use strict';

const { FOREIGNKEYS } = require("sequelize/types/lib/query-types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      product_name: {
        type: dataTypes.STRING
      },
      
      product_price: {
        type: dataTypes.DECIMAL
      },
      product_brand: {
        type: dataTypes.INTEGER
     },
      product_user_id: {
        type: dataTypes.INTEGER
        
      }
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};

