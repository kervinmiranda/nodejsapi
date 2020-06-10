'use strict'

const express = require('express')
const controllers = require('../controllers/empleado')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/empleado', controllers.getEmpleados)
api.get('/empleado/:empleadoId', controllers.getEmpleado)
api.post('/empleado', controllers.saveEmpleado)
api.put('/empleado/:empleadoId', controllers.updateEmpleado)
api.delete('/empleado/:empleadoId', controllers.deleteEmpleado)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, function(req, res){
    res.status(200).send({message: 'Acceso Permitido'})
})
module.exports = api