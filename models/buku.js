'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buku.init({
    title: {
     type: DataTypes.STRING,
     validate:{
      len: [0, 255],
     },
    },
    status: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize, 
    modelName: 'Buku',
    hooks: {
        beforeCreate(buku, option){
          buku.status = 'in_progress';
        },
        beforeUpdate(buku, option){
          buku.status = 'done';
        },
    },
  });
  return Buku;
};