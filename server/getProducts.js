const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        const item = products.filter(e => e.price >= parseInt(req.query.price))
        res.status(200).send(item)
    } else {
        res.status(200).send(products);
    }
}

module.exports = getProducts;