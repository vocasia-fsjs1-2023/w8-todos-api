'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todos.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title is required"
        },
        notEmpty: {
          msg: "Title cannot be empty"
        },
        len: {
          args: [1, 255],
          msg: "Title must be between 1 and 255 characters"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description is required"
        },
        notEmpty: {
          msg: "Description cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.ENUM('created', 'in_progress', 'done'),
      allowNull: false,
      defaultValue: 'created',
      validate: {
        notNull: {
          msg: "Status is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'todos',
    hooks: {
      beforeCreate: (todo) => {
        if (!todo.status) {
          todo.status = 'created';
        }
      }
    }
  });
  return todos;
};