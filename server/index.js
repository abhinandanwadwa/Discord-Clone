const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const app = express();

const PORT = process.env.PORT || 8181;
connectToMongo();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hi!');
});

// Starting The Server
app.listen(PORT, () => {
    console.log(`The server is running on the PORT: ${PORT}`);
});