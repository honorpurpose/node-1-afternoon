const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getproduct')

const app = express();

const port = 3001;

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);






app.listen(port, function(){
    console.log(`Hello world! Listening in on port ${port}.`)
});