const slidersRouter = require('./slider')

function router(app) {
    app.use("/sliders", slidersRouter)
}
module.exports = router;