const express = require('express');
const app = express();


app.get('', (req, res) => {
    res.send('Hello, This is my node and Expresss program Code to run home page.....');

});


app.get('/about', (req, res) => {
    res.send('Hello, This is my node and Expresss program Code to run about page.....');
});


let port = app.listen(5000);

console.log(`server is running on http://localhost:5000`);