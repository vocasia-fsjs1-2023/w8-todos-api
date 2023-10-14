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
      'Todos', 
      [
        {
          title: "Create POST in TODO App",
          description: "Deskripsi todo pertama",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Create GET in TODO App",
          description: "Deskripsi todo kedua",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Create PUT in TODO App",
          description: "Deskripsi todo ketiga",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Create PATCH in TODO App",
          description: "Deskripsi todo keempat",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Create DELETE in TODO App",
          description: "Deskripsi todo kelima",
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
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
