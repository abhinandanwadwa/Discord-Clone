const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { dbName: 'discordClone' }, () => {
        console.log("Connected To Mongo Successfully!!");
    });
}

module.exports = connectToMongo;