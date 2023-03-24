const { Router } = require('express');
const models = require('../models');
// const { getFlight } = require('../controllers/flights.controllers')
const router = Router();


// router.get('/flights/:id/passengers', getFlight);

router.get('/flights/:id/passengers', async (req, res) => {
  try {
    const result = await models.Airplane.findAll()
    res.json(result)
  } catch (error) {
    console.log(error)
  }
});

router.post('/flights/:id/passengers', (req, res) => {
  res.send('respuesta Post')
});

router.put('/flights/:id/passengers', (req, res) => {
  res.send('respuesta put')
});

router.delete('/flights/:id/passengers', (req, res) => {
  res.send('respuesta delete')
});

module.exports = router;