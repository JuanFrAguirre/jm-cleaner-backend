const fs = require('fs')

// actions
const getHighestId = (array) => {
  return Math.max(...array.map((x) => x.id))
}
// TODO: add middleware for length checking
const getLength = (array) => {
  return String(array.length)
}
const getData = () => {
  return JSON.parse(fs.readFileSync('./data/localesMock.json', 'utf-8'))
}
const getProvincias = () => {
  return JSON.parse(fs.readFileSync('./data/provincias.json', 'utf-8'))
}
const getBrands = () => {
  return JSON.parse(fs.readFileSync('./data/brands.json', 'utf-8'))
}
const getStore = (id) => {
  let stores = getData()
  return stores.find((x) => x.id == id)
}
const getStoresByType = (type) => {
  let stores = getData()
  return stores.filter((x) => x.type === type)
}
const getStoresByBrand = (brand) => {
  let stores = getData()
  return stores.filter((x) => x.brand === brand)
}
const getStoresByState = (state) => {
  let stores = getData()
  return stores.filter((x) => x.state === state)
}
const writeData = (data) => {
  fs.writeFileSync('./data/localesMock.json', JSON.stringify(data))
}
const create = (store) => {
  let stores = getData()
  let id = getHighestId(stores)
  store.id = id + 1
  stores = [...stores, store]
  writeData(stores)
  return store
}
const deleteStore = (id) => {
  let stores = getData()
  let store = getStore(id)
  let newStores = stores.filter((x) => x.id != id)
  writeData(newStores)
  return store
}

// controller
const stores = {
  stores: (req, res) => {
    if (req.query.q) res.send(getLength(getData()))
    else res.send(getData())
  },
  storeById: (req, res) => {
    res.send(getStore(req.params.id))
  },
  farmacias: (req, res) => {
    res.send(getStoresByType('farmacias'))
  },
  opticas: (req, res) => {
    res.send(getStoresByType('opticas'))
  },
  storesByBrand: (req, res) => {
    res.send(getStoresByBrand(req.params.brand))
  },
  state: (req, res) => {
    res.render('zone')
  },
  storesByState: (req, res) => {
    res.send(getStoresByState(req.params.state))
  },
  createStore: (req, res) => {
    res.send(create(req.body))
  },
  createForm: (req, res) => {
    res.render('newStore.ejs', { provincias: getProvincias(), brands: getBrands() })
  },
  deleteStore: (req, res) => {
    res.send(deleteStore(req.params.id))
  },
}

module.exports = stores
