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
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title tidak boleh kosong.',
        },
        len: {
          args: [1, 255],
          msg: 'Title harus antara 1 dan 255 karakter.',
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description tidak boleh kosong.',
        },
      },
    },
    status: {
      type: DataTypes.ENUM('created', 'in_progress', 'done'),
      allowNull: false,
      defaultValue: 'created',
    }
  }, {
    sequelize,
    modelName: 'Todo',
    hooks: {
      beforeCreate(todo, options) {
        if (!todo.status) {
        todo.status = "created";
        }
      },
    },
  });
  return Todo;
};