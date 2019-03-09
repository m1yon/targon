const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;

let {createHashOfResults} = require('./helpFunctions/reorderHash');

const url = 'mongodb://heroku_4n9lqqvk:gpr0d89kotgaqj4tbko9pm66fd@ds221435.mlab.com:21435/heroku_4n9lqqvk';
const dbName = 'heroku_4n9lqqvk';
let db;

MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log("unable to connect to mongo server", err);
  } else {
    console.log('Connection established to', url);
    db = client.db(dbName);
    
    app.listen(port, () => {
      console.log(`Server is up on Port: ${port}`);
    });
  }
});

app.use(express.static(publicPath));

app.get('/api/player/:player', (req,res) => {
  const playerName = req.params.player;
  db.collection('players').find({_id: playerName}).toArray().then((docs) => {
    res.status(200).send(docs);
    console.log(docs);
  }); 
});

app.get('/api/TopBoard/:id', (req,res) => {
  const id = req.params.id;
  if(id === 'Kills'){
    db.collection('TopBoards').find({_id: 'topBoardKills'}).toArray().then((docs) => {
      db.collection('players').find({_id: {$in: [docs[0].players[0], docs[0].players[1], docs[0].players[2], docs[0].players[3], docs[0].players[4]]}}).toArray().then((docs2) => {
        let hash = createHashOfResults(docs2);
        let correctOrder = [docs2.length];
        let playerOrder = [docs[0].players[0], docs[0].players[1], docs[0].players[2], docs[0].players[3], docs[0].players[4]];
        for( var i = 0 ; i < docs2.length ; i++ ){
          var queryId = playerOrder[i];
          var result = hash[queryId];
          correctOrder[i] = result;
        } 
        console.log(correctOrder);
        res.send(correctOrder);
      });
    });
  }
}); 

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


