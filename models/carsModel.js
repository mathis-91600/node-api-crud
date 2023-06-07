const mongoose = require('mongoose');

const CarsModel = mongoose.model(
    "car-model",
    {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    "voitures"
);

module.exports = { CarsModel };