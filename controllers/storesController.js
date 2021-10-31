const fs = require('fs')

// actions
let actions = {
  getData: () => {
    return JSON.parse(fs.readFileSync('./data/locales.json', 'utf-8'))
  },

  getStore: id => {
    let stores = actions.getData()
    return stores.find(x => x.id == id)
  },

  getStoresByType: type => {
    let stores = actions.getData()
    return stores.filter(x => x.type === type)
  },

  getStoresByBrand: brand => {
    let stores = actions.getData()
    return stores.filter(x => x.brand === brand)
  },

  getStoresByState: state => {
    let stores = actions.getData()
    return stores.filter(x => x.state === state)
  },
}

const stores = {
  stores: (req, res) => res.send(actions.getData()),
  storeById: (req, res) => {
    let id = req.params.id
    let store = actions.getStore(id)
    console.log('returning', store)
    res.send(actions.getStore(id))
  },
  farmacias: (req, res) => res.send(actions.getStoresByType('farmacias')),
  opticas: (req, res) => res.send(actions.getStoresByType('opticas')),
  storesByBrand: (req, res) => {
    let brand = req.params.brand
    res.send(actions.getStoresByBrand(brand))
  },
  storesByState: (req, res) => {
    let state = req.params.state
    res.send(actions.getStoresByState(state))
  },
}

module.exports = stores
