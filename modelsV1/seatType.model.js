// // const db = require('../utils/database');
// // const { DataTypes } = require('sequelize');

// // const SeatType = db.define('seat_type', {
// //   SeatTypeId: {
// //     type: DataTypes.INTEGER,
// //     primarykey: true,
// //     autoIncrement: true,
// //     allowNull: false,
// //     field: 'Seat_type_id'
// //   },
// //   name: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //     unique: true
// //   },
// // })

// // module.exports = SeatType;


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class SeatType extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // SeatType.belongsTo(models.States, {as: 'state', foreignKey: 'state_id'})
//       // SeatType.hasMany(models.Seats, {as: 'seats', foreignKey: 'SeatType_id'})
//     }
    
//   }
//   SeatType.init({
//     seatype_id: {
//       type: DataTypes.INTEGER,
//       primarykey: true,
//       autoIncrement: true,
//       allowNull: false,
//       field: 'seat_type_id'
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//   }, {
//     sequelize,
//     modelName: 'SeatType',
//     tableName: 'seatType',
//     timestamps: false
//   });
//   return SeatType;
// };