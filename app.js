const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const api = require('./routes/apiRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.redirect('/api'))
app.use('/api', api)

app.listen(PORT, () =>
  console.log(`\n\n\n------------------------------------------------------
Server running smoothly on port ${PORT}...`)
)
