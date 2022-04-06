require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const drinks = require('./models/drinks.js')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Root directory');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks});
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks[req.params.id]})
})

app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(PORT, () => {
    console.log(`Server up on ${PORT}`);
});