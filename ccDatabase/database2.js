const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Database Name
const dbName = 'chemistry';

// Collection Name
const collectionName = 'users';

// Document to insert
const document = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

// Add document to collection function
async function addDocumentToCollection(collectionName, document) {
  try {
    // Connect to the MongoDB server
    const client = await MongoClient.connect(url);

    // Access the database
    const db = client.db(dbName);

    // Access the collection
    const collection = db.collection(collectionName);

    // Insert a single document
    const result = await collection.insertOne(document);

    console.log('Document added successfully.');

    // Close the connection
    client.close();
  } catch (error) {
    console.log('Error:', error);
  }
}

// Call the function to add the document to the collection
addDocumentToCollection();