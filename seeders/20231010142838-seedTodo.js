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

    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          title: "Create judul todos satu",
          description: "description todos satu",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Create judul todos dua",
          description: "description todos dua",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Create judul todos tiga",
          description: "description todos tiga",
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
