const express = require('express')
const router = express.Router()
const stores = require('../controllers/storesController')

router.get('/', stores.stores)

router.get('/store/:id', stores.storeById)

router.get('/farmacias', stores.farmacias)

router.get('/opticas', stores.opticas)

router.get('/brand/:brand', stores.storesByBrand)

router.get('/state/:state', stores.storesByState)

module.exports = router
