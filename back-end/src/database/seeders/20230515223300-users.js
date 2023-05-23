'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Sicília Pierre',
        pollen_balance: 10000,
        email: 'pierre.sicilia@tester.com',
        password: '1034d5f5bf8a0e7f10040d3eefee3e7a', /* AfroReact2023 */
        /* role: 'administrator',  */
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};