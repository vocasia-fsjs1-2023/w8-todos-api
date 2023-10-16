'use strict';

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
      'todos',
      [
        {
          title: 'Judul untuk todo pertama',
          description: 'deskripsi untuk todo pertama',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul untuk todo kedua',
          description: 'deskripsi untuk todo kedua',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul untuk todo ketiga',
          description: 'deskripsi untuk todo ketiga',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul untuk todo keempat',
          description: 'deskripsi untuk todo keempat',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul untuk todo kelima',
          description: 'deskripsi untuk todo kelima',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
