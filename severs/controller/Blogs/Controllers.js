const Products = require('../../model/products.model')

class ProductsControllers {
    //[get] //slider/get
    show(req, res, next) {
        Products.find({})
            .then((item) => {
                res.status(200).json(item);
            })
            .catch((err) => console.log(err))
    }

    //[post] /slider/post
    create(req, res, next) {
        const items = new Products(req.body);
        items
            .save()
            .then((item) => res.status(200).json(item))
            .catch(next)
    }
}

module.exports = new ProductsControllers();