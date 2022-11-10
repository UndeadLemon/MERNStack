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