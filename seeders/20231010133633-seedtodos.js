'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
          title: 'Judul todos satu',
          description: 'deskripsi todos satu',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todos dua',
          description: 'deskripsi todos dua',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todos tiga',
          description: 'deskripsi todos tiga',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todos empat',
          description: 'deskripsi todos empat',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todos lima',
          description: 'deskripsi todos lima',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {}
      );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('todos',null, {});
  },
};
