'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'Users',
      'phoneNumber',
      {
        allowNull: false,
        type: Sequelize.STRING
      }),
    await queryInterface.addColumn(
      'Users',
      'imgUrl',
      {
        allowNull: false,
        type: Sequelize.STRING
      }),
    await queryInterface.addColumn(
      'Users',
      'role',
      {
        allowNull: false,
        type: Sequelize.STRING
      }),
    await queryInterface.addColumn(
      'Users',
      'isActive',
      {
        allowNull: false,
        type: Sequelize.STRING
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
