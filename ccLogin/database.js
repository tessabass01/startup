const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('chemistry');
const scoreCollection = db.collection('score');
const userCollection = db.collection('users');

// const client2 = new MongoClient(url);
// const db2 = client2.db('chemistry');
// const userCollection = db2.collection('users');

const dbName = "chemistry"

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


// Database Name
// const dbName = 'chemistry';

// async function createCollection() {
//   try {
//     // Connect to the MongoDB server
//     const client = await MongoClient.connect(url);
    
//     // Access the database
//     const db = client.db(dbName);

//     // Create a new collection
//     await db.createCollection('users');

//     console.log('Collection created successfully.');

//     // Close the connection
//     client.close();
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// Call the function to create the collection
// createCollection();

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  // await client2.connect();
  await db.command({ ping: 1 });
  // await db2.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addScore(score) {
  const scoreCollection = db.collection('score');
  const result = await scoreCollection.insertOne(score);
  return result;
}

function getHighScores() {
  const scoreCollection = db.collection('score')
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

function getScore(coupleName) {
  const scoreCollection = db.collection('score')
  const query = { name: coupleName };
  const cursor = scoreCollection.findOne(query);
  return cursor;
}

// const userCollection = db.collection('users');

async function addName(newUser) {
  const userCollection = db.collection('users');
  const result = await userCollection.insertOne(newUser);
  return result;
  // const result = await addDocumentToCollection('users', newUser);
  // return result;
}

// function getName() {
//   const userCollection = db.collection('users');
//   const query = { username: /.*/ };
//   const options = {
//     sort: { _id: -1 },
//     limit: 1,
//   };
//   const cursor = userCollection.findOne(query, options);
//   return cursor;
// }

module.exports = { addScore, getHighScores, getScore, addName };