const express = require('express');
const app = express();
const axios = require('axios');
const body_parser = require('body-parser');
const port = 3000;
const { posts } = require('./endpoints');
authentication = require('')
app.use(express.json());
app.use(body_parser.urlencoded({ extended: false}));
app.use(body_parser.json())

// Injeccion de dependencias
const postsHandlers = posts({ axios });

// Post
app.post('/',
    authentication,
    postsHandlers.post
);

app.listen(port || 3000, () => {
    console.log(`Example of app in port ${port}`);
});