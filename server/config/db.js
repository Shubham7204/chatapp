const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to MongoDB successfully");
    }).catch((err) => {
        console.error("Error connecting to MongoDB: ", err);
    });
};

module.exports = connectToMongo;