const express = require('express');
const path = require('path');

const app = express();
const myPublicFiles = path.join(__dirname, '/public')

app.set('vew engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(`${myPublicFiles}/index.html`)
});


app.get('/about', (req, res) => {
    res.sendFile(`${myPublicFiles}/about.html`)
});


app.get('/contact', (req, res) => {
    res.sendFile(`${myPublicFiles}/contact.html`)
});


app.get('*', (req, res) => {
    res.sendFile(`${myPublicFiles}/error.html`)
});



let port = app.listen(5000);

console.log(`server is running on http://localhost:5000`);