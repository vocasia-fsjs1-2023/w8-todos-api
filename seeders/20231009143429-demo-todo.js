"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          title: "Todo App 1",
          description: "Menambahkan todo app pertama via Seeder",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Todo App 2",
          description: "Menambahkan todo app kedua via Seeder",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Todo App 3",
          description: "Menambahkan todo app ketiga via Seeder",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Todo App 4",
          description: "Menambahkan todo app keempat via Seeder",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Todo App 5",
          description: "Menambahkan todo app kelima via Seeder",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
