const fs = require('fs');
const http = require('http');

const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index') 
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});



