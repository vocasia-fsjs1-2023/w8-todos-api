"use strict";
const { Model } = require("sequelize");
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
        validate: {
          notEmpty: true,
          len: [1, 255],
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      status: {
        type: DataTypes.ENUM,
        values: ["created", "in_progress", "done"],
      },
    },
    {
      sequelize,
      modelName: "Todo",
      hooks: {
        beforeCreate(todo, option) {
          if (!todo.status) {
            //Default value inputan jika bernilai null/falsy
            todo.status = "created";
          }
        },
      },
    }
  );
  return Todo;
};
