'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, { useUnifiedTopology: true, useNewUrlParser: true }, (err, res) => {
    if (err) {
        return console.log(`Error conectando la Base de Datos: ${err}`)
    }
    console.log('Conexión a la BD establecida...')
    app.listen (config.port, () => {
        console.log(`API REST corriendo en http:localhost:${config.port}`)
    })
})

