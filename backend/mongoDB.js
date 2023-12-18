const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/users_data';
// Replace 'users_data' with the name of your database

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to the database');

        // Perform operations on the database

        // Example: Insert a document
        const database = client.db('users_data');
        const collection = database.collection('users');
        const document = { name: 'Rohi Kumar', age: 23 };
        const result = await collection.insertOne(document);
        console.log(`Inserted ${result.insertedCount} document into the collection`);

    } finally {
        // Close the connection
        await client.close();
        console.log('Connection closed');
    }
}

// Run the code
run().catch(console.error);
