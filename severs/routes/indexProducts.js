const productsRouter = require('./products')

function router(app) {
    app.use("/products", productsRouter)
}
module.exports = router;