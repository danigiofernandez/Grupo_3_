'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      user_name: {
        type: dataTypes.STRING
      },
      user_name_alias: {
        type: dataTypes.STRING
      },
      user_password: {
        type: dataTypes.STRING
      },
      user_mail: {
        type: dataTypes.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};

