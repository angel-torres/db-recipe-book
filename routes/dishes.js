const db = require('../data/dbConfig.js');
const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const dishes = await db('dishes');
        res.status(200).json(dishes)    
    } catch (error) {
        
    }
});

route.get('/:id', async (req, res) => {
    try {
        const dish = await db('dishes').where({id: req.params.id}).first('name')
        res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/', async (req, res) => {
    try {
        const [id] = await db('dishes').insert(req.body);
        const dish = await db('dishes').where({id}).first();
        res.status(200).json(dish)        
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const removed = await db('dishes').where({id}).update(req.body);
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json(error) 
    }
})

route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const removed = await db('dishes').where({id}).del();
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/:id/recipes', async (req, res) => {
    const id = req.params.id;
    try {
        const recipes = await db('recipes')
        .join('dishes', 'dishes.id')
        .select('recipes.id', 'dishes.name')
        .where('recipes.dish_id', id);

        res.status(200).json(recipes)
    } catch (error) {
        res.status(500).json(error)                
    }
})

module.exports = route;