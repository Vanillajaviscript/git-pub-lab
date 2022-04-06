const express = require('express');
const app = express();
const PORT = 3000;
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send('Welcome to the Github App!');
})

app.listen(PORT, () => {
    console.log(`Server up on ${PORT}`);
});

app.get('/drinks', (req, res) => {
    res.send(drinks)
})

