const fs = require('fs')

const api = {
  base: (req, res) => res.send('API working!'),
  test: (req, res) => res.send('API test working!'),
}

module.exports = api
