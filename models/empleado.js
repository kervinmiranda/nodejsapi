'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmpleadoSchema = Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String,
    correo: String,
    cargo:String
})

module.exports = mongoose.model('Empleado', EmpleadoSchema)