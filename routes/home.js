const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('pages/home.html', { base: { title: "Home page" } })
    console.log('home');
});

module.exports = router;