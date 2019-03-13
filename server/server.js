const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;

const {arrayToObjects} = require('./helperMethods/arrayToObjects');

const url = 'mongodb://heroku_4n9lqqvk:gpr0d89kotgaqj4tbko9pm66fd@ds221435.mlab.com:21435/heroku_4n9lqqvk';
const dbName = 'heroku_4n9lqqvk';
let db; // creates db variable in order to make database calls outside the function

// connecting to database and starting server on port
MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log("unable to connect to mongo server", err);
  } else {
    console.log('Connection established to', url);
    db = client.db(dbName);
    
    app.listen(port, () => {
      console.log(`Server is up on port: ${port}`);
    });
  }
});

app.use(express.static(publicPath));

// API GET request which sends player data in JSON format
app.get('/api/getPlayers', (req,res) => {
  db.collection('players').find({}).toArray().then((docs) => {
    let returnedValue = arrayToObjects(docs);
    res.send(returnedValue);
    console.log(returnedValue);
  }); 
});

// API GET request which sends the players names for each top stat
app.get('/api/topBoards', (req,res) => {
  db.collection('TopBoards').find({}).toArray().then((docs) => {
    // create new variable object which will store the top 5 players for each stat
    let returnedValue = {
      'topBoards': {
        'totalKills': docs[0].players,
        'totalAssists': docs[1].players,
        'kda': docs[2].players,
        'dpm': docs[3].players,
        'dmgPercentage': docs[4].players,
        'kp': docs[5].players,
        'goldPercentage': docs[6].players,}
    };
    res.send(returnedValue);
    console.log(returnedValue);
  });
});

// API GET request sends the wins and loses for the teams for every game
app.get('/api/matchHistory', (req,res) => {
  db.collection('RecentMatches').find({}).toArray().then((docs) =>{
    let returnedValue = arrayToObjects(docs); 
    res.send(returnedValue);
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


