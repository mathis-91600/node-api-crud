const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/node-api",
        { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("mongodb connected");
    } catch (err) {
        console.error("connection error:", err);
    }
};

connectDB();