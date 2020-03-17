const express = require('express');
const app = express();
const axios = require('axios');
const body_parser = require('body-parser');
const port = 3000;
app.use(express.json());
app.use(body_parser.urlencoded({ extended: false}));
app.use(body_parser.json())

// Get
app.get('/', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (data && typeof data !== 'undefined') {
        res.status(200).json(data)
    } else {
        res.status(400).json({
            error: 'No se ha podido realizar la peticion '
        })
    }
});

// Post
app.post('/', async (req, res) => {
    const { body } = req;
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body);
    if (data && typeof data !== 'undefined') {
        res.status(201).json(data)
    } else {
        res.status(400).json({
            error: 'No se ha podido realizar la peticion '
        })
    }
});

// Put
app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { data } = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
    if (data && typeof data !== 'undefined') {
        res.status(204).json(data)
    }
    res.status(400).json({
        error: 'No se ha podido realizar la peticion '
    })
});

// delete
app.delete('/:id', async (req, res) => {
    const { id } = req;
    const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (data && typeof data !== 'undefined') {
        res.status(204).json(data)
    } else {
        res.status(400).json({
            error: 'No se ha podido realizar la peticion '
        })
    }
});

app.listen(port || 3000, () => {
    console.log(`Example of app in port ${port}`);
});