'use strict'
//Se importan las librerias
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

//Se hacen uso de las librerias
app.use( bodyParser.urlencoded( { extended: false} ) )
app.use( bodyParser.json() )
app.use('/api',api)

module.exports = app