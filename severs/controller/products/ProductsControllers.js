const Products = require('../../model/products.model')

class ProductsControllers {
    //[get] /products
    show(req, res, next) {
        Products.find({})
            .then((item) => {
                res.status(200).json(item);
            })
            .catch((err) => console.log(err))
    }

    //[post] /products/post
    create(req, res, next) {
        const items = new Products(req.body);
        items
            .save()
            .then((item) => res.status(200).json(item))
            .catch(next)
    }
    findProduct(req, res, next) {
        Products.findById({ _id: req.params.id })
            .then((item) =>
                res.send(item),
            )
            .catch(next);
    }

    //[edit] /products/edit
    edit(req, res, next) {
        Products.updateOne({ _id: req.params.id }, req.body)
            .then((item) =>
                res.status(200).json(item),
            )
            .catch(next);
    }

    //[delete] /products/delete
    delete(req, res, next) {
        Products.deleteOne({ _id: req.params.id })
            .then((item) =>
                res.status(200).json(item),
            )
            .catch(next);
    }
}

module.exports = new ProductsControllers();