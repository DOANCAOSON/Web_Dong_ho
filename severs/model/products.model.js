const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const product = new Schema(
    {
        name: {
            type: String,
            maxlength: 255,
            required: true,
        },
        price: {
            type: Number,
            maxlength: 255,
            required: true,
        },
        img: {
            type: [],
            required: true,
        },
        phobien: {
            type: Boolean,
            default: false,
        },
        khuyenmai: {
            type: Boolean,
            default: false,
        },
        moi: {
            type: Boolean,
            default: false,
        },
        slug: { type: String, slug: "name", unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Products", product);
