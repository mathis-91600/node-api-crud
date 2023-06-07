const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    // nom de la base à laquelle on veut accéder
    "node-api",
    //contenue de la table
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    // nom de la table 
    "posts"
);

module.exports = { PostsModel };