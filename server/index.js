const express = require('express');
const getProducts = require('./getProducts');

const app = express();

const port = 3001;

app.get('/api/products', getProducts);






app.listen(port, function(){
    console.log(`Hello world! Listening in on port ${port}.`)
});