const express = require('express')
const router = express.Router()

const productsControllers = require('../controller/products/ProductsControllers')

router.post('/post', productsControllers.create)
router.get('/get', productsControllers.show)
router.put('/:id', productsControllers.edit)
router.delete('/:id', productsControllers.delete)
router.get('/:id', productsControllers.findProduct)

module.exports = router;