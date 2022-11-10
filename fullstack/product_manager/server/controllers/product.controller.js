const { response } = require('express');
const {Product} = require('../models/product.model')

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({title, price, description})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}
module.exports.getAll = (req, res) => {
    Product.find({})
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
}
module.exports.getOne = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}
module.exports.updateOne = (req, res) => {
    
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}
module.exports.deleteOne = (req, res) => {
    
    Product.findOneAndDelete({_id:req.params.id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => res.json(err))
}