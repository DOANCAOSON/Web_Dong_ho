const slider = require('../../model/slider.model')

class sliderControllers {
    //[get] /slider
    show(req, res, next) {
        slider.find({})
            .then((item) => {
                res.status(200).json(item);
            })
            .catch((err) => console.log(err))
    }

    //[post] /slider/post
    create(req, res, next) {
        const items = new slider(req.body);
        items
            .save()
            .then((item) => res.status(200).json(item))
            .catch(next)
    }

    //[edit] /slider/edit
    edit(req, res, next) {
        slider.updateOne({ _id: req.params.id }, req.body)
            .then((item) =>
                res.status(200).json(item),
            )
            .catch(next);
    }

    //[delete] /slider/delete
    delete(req, res, next) {
        slider.deleteOne({ _id: req.params.id })
            .then((item) =>
                res.status(200).json(item),
            )
            .catch(next);
    }
}

module.exports = new sliderControllers();