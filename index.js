'use strict'
const app = require('./app')
const mongoose = require('mongoose')
const config = require('./config')
//Conexion a la base de datos
mongoose.connect(config.db,(err,res)=>{
    if( err ) throw err
    console.log('conexion a la base de datos establecida')

    app.listen(config.port,()=>{
        console.log('Api rest http://localhost:'+config.port)
    })
})

//Se crea el server
