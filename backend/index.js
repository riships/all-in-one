const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

client.connect(async (err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    const db = client.db('users_data');
    const collection = db.collection('users');

    console.log('db connected');

    // Your MongoDB operations here

    // Close the connection
    await client.close();
});


app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

const users = [
    { username: 'user123', password: 'password123' },
    // Add more users as needed
];


// Route for handling login form submissions
app.post('/', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists in the database (replace with a database query in a real app)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // res.send('Login successful!');
        res.sendFile(__dirname + '/public/home.html');
        // You might redirect the user to a dashboard or another page here
    } else {
        res.send('Invalid username or password');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});