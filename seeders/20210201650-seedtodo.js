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
     await queryInterface.bulkInsert('Todos', 
     [
      {
        title: 'todo 1',
        description: 'deskripsi todo 1',
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'todo 2',
        description: 'deskripsi todo 2',
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'todo 3',
        description: 'deskripsi todo 3',
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'todo 4',
        description: 'deskripsi todo 4',
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'todo 5',
        description: 'deskripsi todo 5',
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date()
      },

       
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {});
  }
};