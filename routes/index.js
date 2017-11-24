const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'MyWebStore'
    });
});

router.get('/products', (req, res, next) => {
    res.render('products',{
        title:'Lista de productos'
    })
})

module.exports = router;