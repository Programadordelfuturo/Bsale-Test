// const db = require('../utils/database');
// const { DataTypes } = require('sequelize');
// const Purchases = require('./purchases.model');
// const Passenger = require('./passenger.model');
// const SeatType = require('./seatType.model');
// const Seat = require('./seat.model');
// const flight = require('./fligth.model');


// const BoardingPass = db.define('boarding_pass', {
//   boardingPassId: {
//     type: DataTypes.INTEGER,
//     primarykey: true,
//     autoIncrement: true,
//     allowNull: false,
//     field: 'boarding_pass_id'
//   },
//   purchasesId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'purchases_id',
//     references: {
//       model: Purchases,
//       key: 'id',
//     }
//   },
//   passengerId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'passenger_id',
//     references: {
//       model: Passenger,
//       key: 'id',
//     }
//   },
//   seatTypeId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'seat_type_id',
//     references: {
//       model: SeatType,
//       key: 'id',
//     }
//   },
//   seatId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'seat_id',
//     references: {
//       model: Seat,
//       key: 'id',
//     }
//   },
//   flight: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: flight,
//       key: 'id',
//     }
//   } 
// })

// module.exports = BoardingPass;