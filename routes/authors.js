const express = require('express')
const router = express.Router()
const Author = require('../models/author')

router.get('/', (req, res) => {
    res.render("authors/index")
})

router.get('/new', (req, res) => {
    res.render("authors/new", {author : new Author()})
})

router.post('/', (req, res) => {
    // res.send(req.body.name)
    const x = req.body.name
    console.log(x)
    res.send("test")
})


module.exports = router