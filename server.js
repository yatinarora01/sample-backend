// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/product', (req, res) => {
    const product = req.body;
    console.log('Received product:', product);
    res.status(200).send('Product received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
