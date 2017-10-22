'use strict'

const express = require('express')
const api = express.Router()
const ProductC = require('../controllers/productController')

//Rutas para producto
api.get('/product',ProductC.getProducts)
api.get('/product/:productId',ProductC.getProduct)
api.post('/product',ProductC.saveProduct)
api.put('/product/:productId',ProductC.updateProduct)
api.delete('/product/:productId',ProductC.deleteProduct)


module.exports = api