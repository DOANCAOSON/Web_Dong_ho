const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const slider = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: [String],
        slug: { type: String, slug: "name", unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Slider", slider);
