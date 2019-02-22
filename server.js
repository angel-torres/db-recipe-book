const express = require('express');
const server = express();
const dishesRoute = require('./routes/dishes.js')

server.use(express.json());
server.use('/api/dishes', dishesRoute)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Hello world.'})
})

module.exports = server;