'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          len: [1, 255],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      status: {
        type: DataTypes.ENUM('created', 'in_progress', 'done'),
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      hooks: {
        beforeCreate: (todo) => {
          todo.status = "created";
        },
        beforeUpdate: (todo) => {
          todo.status = "done";
        },
      },
    }
  );
  

  return Todo;
};