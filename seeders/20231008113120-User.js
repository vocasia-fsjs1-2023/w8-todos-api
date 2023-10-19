"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Dealers", [
      {
        title: "Yamaha",
        status: "in_progress",
        description: "Saat ini tidak tersedia di Dealer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Honda",
        status: "in_progress",
        description: "Saat ini tidak tersedia di Dealer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kawasaki",
        status: "in_progress",
        description: "Saat ini tidak tersedia di Dealer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Suzuki",
        status: "in_progress",
        description: "Saat ini tidak tersedia di Dealer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sepeda Listrik",
        status: "in_progress",
        description: "Saat ini tidak tersedia di Dealer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
