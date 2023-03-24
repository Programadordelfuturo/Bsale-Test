// const db = require('../utils/database');
// const { DataTypes } = require('sequelize');
// const Airplane = require('./airplane.model');

// const flight = db.define('flight', {
//   flightId: {
//     type: DataTypes.INTEGER,
//     primarykey: true,
//     autoIncrement: true,
//     allowNull: false,
//     field: 'flight_id'
//   },
//   takeoffDateTime: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'takeoff_date_time'
//   },
//   takeoffAirport: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     field: 'takeoff_airport'
//   },
//   landingDateTime: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'landing_date_time'
//   },
//   airplaneId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     field: 'airplane_id',
//     references: {
//       model: Airplane,
//       key: "id"
//     },
//   }
// })

// module.exports = flight;

