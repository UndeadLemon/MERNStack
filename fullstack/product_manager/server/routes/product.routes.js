const { application } = require('express');
const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/product/', ProductController.getAll)
    app.get('/api/product/:id', ProductController.getOne)
    app.post('/api/product/create', ProductController.createProduct);
}   