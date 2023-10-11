'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todos', 
    [
      {
        title: 'Membuat Todos APP',
        description:"deskripsi dalam membuat todos app dari judulnya",
        status: "created",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: 'Membuat Todos APP 2',
        description:"deskripsi dalam membuat todos app 2 dari judulnya",
        status: "created",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: 'Membuat Todos APP 3',
        description:"deskripsi dalam membuat todos app 3 dari judulnya",
        status: "created",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: 'Membuat Todos APP 4',
        description:"deskripsi dalam membuat todos app 4 dari judulnya",
        status: "created",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: 'Membuat Todos APP 5',
        description:"deskripsi dalam membuat todos app 5 dari judulnya",
        status: "created",
        updatedAt: new Date(),
        createdAt: new Date()
        
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todos', null, {});
  }
};
