const db = require('../data/dbConfig.js');
const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
    const dishes = await db('dishes');
    res.status(200).json(dishes)    
    } catch (error) {
        
    }
})

module.exports = route;