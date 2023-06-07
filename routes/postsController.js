const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', async (req, res) => {
    // callback déprécié utiliser try/catch
    try {
        const posts = await PostsModel.find();
        console.log(posts);
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newRecord = new PostsModel({
            author: req.body.author,
            message: req.body.message
        });

        const savedRecord = await newRecord.save();
        res.send(savedRecord);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// update
router.put("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

        try {
            const updateRecord = {
                author: req.body.author,
                message: req.body.message
            };

            const updatedDoc = await PostsModel.findByIdAndUpdate(
                req.params.id,
                { $set: updateRecord },
                { new: true }
            );
    
            if (!updatedDoc) {
                throw Error("ID non trouvé");
            }
    
            res.send(updatedDoc);
    
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    });

router.delete("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

        try {
            console.log(req.body)
            const deleteDoc = await PostsModel.findByIdAndRemove(req.params.id);

            if (!deleteDoc) {
                throw Error("Delete error : ID non trouvé");
            }

            res.send("message supprimé");

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
});
module.exports = router;