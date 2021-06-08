const fs = require('fs');
const http = require('http');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('index', {title: 'DibDevs'}) 
});

app.get('/projects', (req, res) => {
    res.render('projects', {title: 'DibDevs | Projects'})
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'DibDevs | Contact'})
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'DibDevs | About'})
});

app.use((req, res) => {
    res.status(404).render('404', {title:'Page Not Found'})
});


