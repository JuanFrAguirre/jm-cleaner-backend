const express = require('express')
const router = express.Router()
const stores = require('../controllers/storesController')

router
  .get('/', stores.stores)
  .get('/store/new', stores.createForm)
  .get('/store/:id', stores.storeById)
  .get('/farmacias', stores.farmacias)
  .get('/opticas', stores.opticas)
  .get('/brand/:brand', stores.storesByBrand)
  .get('/state', stores.state)
  .get('/state/:state', stores.storesByState)

router.post('/store/new', stores.createStore)

router.delete('/store/:id', stores.deleteStore)

module.exports = router
