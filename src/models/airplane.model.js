// const db = require('../utils/database');
// const { DataTypes } = require('sequelize');

// const Airplane = db.init({
//   airplaneId: {
//     type: DataTypes.INTEGER,
//     primarykey: true,
//     // autoIncrement: true,
//     allowNull: false,
//     field: 'airplane_id'
//   },
//   name: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   modelName: 'Airplane',
//   tableName: 'airplane',
// })

// module.exports = Airplane;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Airplane.belongsTo(models.States, {as: 'state', foreignKey: 'state_id'})
      // Airplane.hasMany(models.Seats, {as: 'seats', foreignKey: 'airplane_id'})
    }
    
  }
  Airplane.init({
    airplane_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'airplane_id'
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Airplane',
    tableName: 'airplane',
    timestamps: false
  });
  return Airplane;
};