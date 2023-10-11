'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT(255),
    status: DataTypes.ENUM("created", "in_progress", "done"),
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
    
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};