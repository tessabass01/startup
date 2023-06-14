const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', async (_req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', async (req, res) => {
  DB.addScore(req.body);
  const scores = await DB.getHighScores();
  res.send(scores);
});

// GetScore
apiRouter.get('/score/:name', async (req, res) => {
  const newScore = await DB.getScore(req.params.name);
  res.send(newScore);
})

// PostUsername
apiRouter.post('/username', async (req, res) => {
  console.log(req.body);
  const newUser = await DB.addName(req.body);
  res.send(newUser);
});

// GetUsername
// apiRouter.get('/username', async (_req, res) => {
//   const newName = await DB.getName();
//   res.send(newName);
// })

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});