const express = require('express')
const router = express.Router()

const sliderControllers = require('../controller/sliders/SlidersControllers')

router.post('/post', sliderControllers.create)
router.get('/get', sliderControllers.show)
router.put('/:id', sliderControllers.edit)
router.delete('/:id', sliderControllers.delete)

module.exports = router;