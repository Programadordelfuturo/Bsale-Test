// // const db = require('../utils/database');
// // const { DataTypes } = require('sequelize');
// // const SeatType = require('./seatType.model');
// // const Airplane = require('./airplane.model');

// // const Seat = db.define('seat', {
// //   seatId: {
// //     type: DataTypes.INTEGER,
// //     primarykey: true,
// //     autoIncrement: true,
// //     allowNull: false,
// //     field: 'seat_id'
// //   },
// //   seatColumn: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //     field: 'seat_column'
// //   },
// //   seatRow: {
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //     field: 'seat_row'
// //   },
// //   seatTypeId: {
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //     field: 'seat_type_id',
// //     references: {
// //       model: SeatType,
// //       key: "id"
// //     },
// //   },
// //   airplaneId: {
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //     field: 'airplane_id',
// //     references: {
// //       model: Airplane,
// //       key: "id"
// //     },
// //   }
// // })

// // module.exports = Seat;


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// const airplaneModel = require('./airplane.model');
// const seatTypeModel = require('./seatType.model');
// module.exports = (sequelize, DataTypes) => {
//   class Seats extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // Seats.belongsTo(models.States, {as: 'state', foreignKey: 'state_id'})
//       // Seats.(models.Airplane, {as: 'seats', foreignKey: 'Seats_id'})
//     }
    
//   }
//   Seats.init({
//     seatId: {
//       type: DataTypes.INTEGER,
//       primarykey: true,
//       autoIncrement: true,
//       allowNull: false,
//       field: 'seat_id'
//     },
//     seatColumn: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       field: 'seat_column'
//     },
//     seatRow: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'seat_row'
//     },
//     seatTypeId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'seat_type_id',
//       references: {
//         model: seatTypeModel,
//         key: "id"
//       },
//     },
//     airplaneId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'airplane_id',
//       references: {
//         model: airplaneModel,
//         key: "id"
//       },
//     }
//   }, {
//     sequelize,
//     modelName: 'Seats',
//     tableName: 'seats',
//     timestamps: false
//   });
//   return Seats;
// };
