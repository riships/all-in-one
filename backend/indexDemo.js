const express = require('express');
const path = require('path');

const app = express();
const myPublicFiles = path.join(__dirname, '/public')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(`${myPublicFiles}/index.html`)
});


app.get('/about', (req, res) => {
    res.sendFile(`${myPublicFiles}/about.html`)
});


app.get('/contact', (req, res) => {
    res.sendFile(`${myPublicFiles}/contact.html`)
});

app.get('/myejsFiles', (req, res) => {
    res.render('mySubList');

})


app.get('*', (req, res) => {
    res.sendFile(`${myPublicFiles}/error.html`)
});


let port = 5000;
app.listen(port);

console.log(`server is running on http://localhost:${port}`);