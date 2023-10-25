'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        title: "Create POST in TODO App",
        description: "Membuat API Post Pada Todos app untuk menambahkan todo list",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create PUT in TODO App",
        description: "Mengubah todo tentang post menjadi PUT pada TODO App",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create PUT in TODO App",
        description: "Mengubah todo tentang post menjadi PUT pada TODO App",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Delete PUT in TODO App",
        description: "Menghapus todo tentang post menjadi PUT pada TODO App",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
