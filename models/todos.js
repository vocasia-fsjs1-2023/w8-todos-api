'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todos.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "input tidak boleh null"
        },
        notEmpty: {
          ms: "input tidak boleh string kosong"
        },
        len: {
          args: [1, 255],
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "input tidak boleh null"
        },
        notEmpty: {
          msg: "input tidak boleh string kosong"
        }
      }
    },
    status: {
      type: DataTypes.ENUM('created', 'in_progress', 'done'),
      allowNull: false,
      defaultValue: "created",
    },
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};