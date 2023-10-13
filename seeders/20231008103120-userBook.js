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
    return queryInterface.bulkInsert('Bukus', [{
      title: 'Aku klik Maka Aku Ada',
      status: 'in_progress',
      description: 'Buku ini sedang di pinjam oleh orang china',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Kintsugi',
      status: 'in_progress',
      description: 'Buku ini sedang di pinjam oleh orang china',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Catatan tentang Dunia yang Gelisah',
      status: 'in_progress',
      description: 'Buku ini sedang di pinjam oleh orang china',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Hal-hal yang Boleh dan Tak Boleh Kulakukan',
      status: 'in_progress',
      description: 'Buku ini sedang di pinjam oleh orang china',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Atomic Habits',
      status: 'in_progress',
      description: 'Buku ini sedang di pinjam oleh orang china',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
