const express = require('express')
const router = express.Router()
const api = require('../controllers/apiController')
const stores = require('./storesRoutes')

router.get('/', api.base)

router.get('/test', api.test)

router.use('/stores', stores)

module.exports = router
