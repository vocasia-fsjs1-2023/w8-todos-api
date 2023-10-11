'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: true,
        type: Sequelize.ENUM('created', 'in_progress', 'done')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    const Todo = queryInterface.sequelize.models.todo;
    Todo.addHook('beforeCreate', (todo, options) => {
      if (!todo.status) {
        todo.status = 'created';
      }
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};