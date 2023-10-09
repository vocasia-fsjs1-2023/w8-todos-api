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
          title: 'Judul todo satu',
          description: 'deskripsi todo satu',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todo dua',
          description: 'deskripsi todo dua',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todo tiga',
          description: 'deskripsi todo tiga',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todo empat',
          description: 'deskripsi todo empat',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Judul todo lima',
          description: 'deskripsi todo lima',
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("todos", null, {});
  }
};
