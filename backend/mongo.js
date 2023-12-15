const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/users_data');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number
});

const userModel = mongoose.model('users', userSchema);


app.get(`/getUser/${userModel.id}`, (req, res) => {
    userModel.find({})
        .then(function (users) {
            res.json(users);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
