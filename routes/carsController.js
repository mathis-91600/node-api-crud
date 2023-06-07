const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { CarsModel } = require('../models/carsModel');

router.get('/', async (req, res) => {
    try {
        const cars = await CarsModel.find();
        res.json(cars);
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newRecord = new CarsModel({
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price
        });

        const savedRecord = await newRecord.save();
        res.send(savedRecord);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;