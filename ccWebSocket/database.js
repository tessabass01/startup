const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../ccLogin/dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('chemistry');
const scoreCollection = db.collection('score');
const userCollection = db.collection('users');

// const dbName = "chemistry"

// // Add document to collection function
// async function addDocumentToCollection(collectionName, document) {
//   try {
//     // Connect to the MongoDB server
//     const client = await MongoClient.connect(url);

//     // Access the database
//     const db = client.db(dbName);

//     // Access the collection
//     const collection = db.collection(collectionName);

//     // Insert a single document
//     const result = await collection.insertOne(document);

//     console.log('Document added successfully.');

//     // Close the connection
//     client.close();
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

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

async function addName(newUser) {
  const userCollection = db.collection('users');
  const result = await userCollection.insertOne(newUser);
  return result;
}

module.exports = { addScore, 
  getHighScores, 
  getScore,  
  getUser, 
  getUserByToken,
  createUser 
};