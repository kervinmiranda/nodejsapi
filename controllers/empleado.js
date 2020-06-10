'use strict'

const Empleado = require('../models/empleado')

function getEmpleados(req, res){
    console.log('GET /api/empleado')
    Empleado.find({}, (err, empleados)=>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})   
        if (!empleados) return res.status(404).send({message: 'No hay empleados registrados'})
        res.status(200).send({ empleados })
    }) 
}

function getEmpleado(req, res){
    console.log('GET /api/:empleadoId')
    console.log(req.body)
    let empleadoId = req.params.empleadoId
    Empleado.findById(empleadoId, (err, empleado)=>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!empleado) return res.status(404).send({message: 'El Empleado no está registrado'})       
        res.status(200).send({ empleado })
    }) 
}

function saveEmpleado(req, res){
    console.log('POST /api/empleado')
    console.log(req.body)
    let empleado = new Empleado()
    empleado.nombre = req.body.nombre
    empleado.apellido = req.body.apellido
    empleado.direccion = req.body.direccion
    empleado.telefono = req.body.telefono
    empleado.correo = req.body.correo
    empleado.cargo = req.body.cargo
    empleado.save((err, EmpleadoStored)=>{
        if (err) res.status(500).send({message:`Error al salvar en la Base de Datos ${err}`})
    res.status(200).send({empleado: EmpleadoStored})
    })
}

function updateEmpleado(req, res){
    console.log('PUT /api/empleado/:empleadoId')
    console.log(req.body)
    let empleadoId = req.params.empleadoId
    let update = req.body
    Empleado.findByIdAndUpdate(empleadoId, update, (err, empleadoUpdated)=>{
        if (err) res.status(500).send({message: `Error al actualizar el empleado: ${err}`})
        res.status(200).send( { empleado: empleadoUpdated })
    }) 
}

function deleteEmpleado(req, res){
    console.log('DELETE /api/empleado/:empleadoId')
    console.log(req.body)
    let empleadoId = req.params.empleadoId
    Empleado.findById(empleadoId, (err, empleado)=>{
        if (err) return res.status(500).send({message: `Error al borrar el empleado: ${err}`})
        if (!empleado) return res.status(404).send({message: 'El Empleado no está registrado'})       
        empleado.remove(err =>{
            if (err) res.status(500).send({message: `Error al borrar el empleado: ${err}`})
            res.status(200).send({message: 'El empleado ha sido Eliminado'})
        })
    })
}

module.exports = {
    getEmpleado,
    getEmpleados,
    saveEmpleado,
    updateEmpleado,
    deleteEmpleado
}