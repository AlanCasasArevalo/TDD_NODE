const express = require('express');
const app = express();
const axios = require('axios');
const body_parser = require('body-parser');
const port = 3000;
const { users } = require('./endpoints');
app.use(express.json());
app.use(body_parser.urlencoded({ extended: false}));
app.use(body_parser.json())

// Injeccion de dependencias
const userHandlers = users({ axios });
// Get
app.get('/', userHandlers.get);

// Post
app.post('/', userHandlers.post );

// Put
app.put('/:id', userHandlers.put);

// delete
app.delete('/:id', userHandlers.delete);

app.listen(port || 3000, () => {
    console.log(`Example of app in port ${port}`);
});