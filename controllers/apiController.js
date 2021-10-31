const fs = require('fs')
const path = require('path')

const api = {
  base: (req, res) =>
    res.render('index', {
      brands: [
        { name: 'Farmacias Lider', brand: 'farmaciasLider' },
        { name: 'Farmacias Sanchez Antonioli', brand: 'farmaciasSanchezAntonioli' },
        { name: 'Farmacias Red', brand: 'farmaciasRed' },
        { name: 'Farmacias General Paz', brand: 'farmaciasGeneralPaz' },
        { name: 'Farmacias Genericas', brand: 'farmaciasGenericas' },
      ],
    }),
  test: (req, res) => res.send('API test working!'),
}

module.exports = api
