'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        field: 'name',
        type: Sequelize.STRING,
        allowNull: false,
      },
      pollenBalance: {
        field: 'pollen_balance',
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // I will be implement in another time
      /* email: {
       type: Sequelize.STRING,
       allowNull: false,
      },
      password: {
       type: Sequelize.STRING,
       allowNull: false,
      },
      role: {
       type: Sequelize.STRING,
       allowNull: false,
      } */
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};