const express = require('express');
const { getFlight } = require('./controllers/flights.controllers');
const flightsRouter = require('./router/flights.router');
// const db = require('./utils/database');

const app = express();


app.use(express.json());


// db.authenticate()
//   .then(() => console.log("Autenticación exitosa"))
//   .catch((error) => console.log(error));

// db.sync()
//   .then(() => console.log('Efectivo'))
//   .catch(error => console.log(error));


app.use('/', flightsRouter);



const PORT = 3000

app.listen(PORT)