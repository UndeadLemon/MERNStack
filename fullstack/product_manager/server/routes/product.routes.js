const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/product/', ProductController.getAll)
    app.post('/api/product/create', ProductController.createProduct);
}   