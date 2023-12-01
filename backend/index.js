const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('Please provide your age');
    } else if (req.query.age < 18) {
        res.send('You are not authorize to access this page')
    }
    else {
        next();
    }
};

// app.use(reqFilter);


app.get('/', (req, res) => {
    res.send('Welcome to the world of node js home');
});

app.get('/user', reqFilter, (req, res) => {
    res.send('Welcome to the world of node js user');
});

let port = 5000;
app.listen(port);


console.log(`server is running on http://localhost:${port}`);

