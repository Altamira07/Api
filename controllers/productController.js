'use strict'
const Product = require('../models/product')

class ProductController {
     getProduct(req,res)
    {
        let productId = req.params.productId;
        
            Product.findById(productId,(err,product)=>{
                if(err) return res.status(500).send({ message:'Error al realizar la peticion'})
                if(!product) return res.status(404).send({message:'El producto no existe'})
        
                res.status(200).send({ product })
            })
        
    }
    
     getProducts(req,res)
    {
        Product.find({},(err,products)=>{
            if(err) return res.status(500).send({ message:'Error al realizar la peticion'})
            if(!products) return res.status(404).send({message:'El producto no existe'})
            res.status(200).send({products})
        })
    }
    
     updateProduct(req,res)
    {
        let productId = req.params.productId
        let update = req.body
        Product.findByIdAndUpdate( productId, update ,(err,productUpdated)=>{
            if(err) res.status(500).send({message:'Error al actualizar'})
            res.status(200).send({message:'prducto actualizado'})
        } )
    }
    
     deleteProduct(req,res)
    {
        let productId = req.params.productId
            Product.findById(productId,(err,product)=>{
            if(err) res.status(500).send({ message:'Error al eliminar'})
            product.remove((error) =>{
                if(error) res.status(500).send({message:'Erro al borrar el producto'})
                res.status(200).send({message:'Eliminado'})
            })
                
        })    
    }
     saveProduct(req,res)
    {
        let product = new Product()
        product.name = req.body.name
        product.picture = req.body.picture
        product.price = req.body.price
        product.category = req.body.category
        product.description = req.body.description
    
        product.save((err,productStored)=>{
            if(err) res.status(500).send({message:'Error al salvar el mesnaje'})
            res.status(202).send({ product: productStored})
        })
    }    
}


var ProductC = new ProductController()

module.exports =  ProductC