const fs = require('fs')

const getBrands = () => JSON.parse(fs.readFileSync('./data/brands.json', 'utf-8'))

const api = {
  base: (req, res) => res.render('pages/index', { brands: getBrands() }),
  test: (req, res) => res.send('API test working!'),
}

module.exports = api
