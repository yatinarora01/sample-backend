// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

// Handle POST requests to /product
app.post('/product', (req, res) => {
    const product = req.body;
    console.log('Received product:', product);
    res.status(200).send('Product received');
});

// Handle GET requests to /
app.get('/', (req, res) => {
    res.send('Welcome to the Product Billing API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
