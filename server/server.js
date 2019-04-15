const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const grabParseCalculateData = require('./helperMethods/grabParseCalculateData');
var CronJob = require('cron').CronJob;

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

    //for testing
    //grabParseCalculateData(db);


    //console.log('Before job instantiation');
    const job = new CronJob('00 00 00 * * *', function() {
      console.log('At Midnight executing query calculations:');
      grabParseCalculateData(db);
    });
    //console.log('After job instantiation');
    job.start();

    app.listen(port, () => {
      console.log(`Server is up on port: ${port}`);
    });
  }
});

app.use(express.static(publicPath));

// API GET request which sends all the data
app.get('/api/data', (req,res) => {
  let returnedValue = {};
  db.collection('players').find({}).toArray().then((docs) => {
    returnedValue.players = arrayToObjects(docs);

    db.collection('Teams').find({}).toArray().then((docs2) =>{
      returnedValue.teams = arrayToObjects(docs2);
      
      db.collection('TopBoards').find({}).toArray().then((docs3) => {
        returnedValue.playerTopBoards = arrayToObjects(docs3);

        db.collection('TeamsTopBoards').find({}).toArray().then((docs4) => {
          returnedValue.teamTopBoards = arrayToObjects(docs4);
          res.send(returnedValue);
        }).catch((e) => {
          res.status(500).send();
        });

      }).catch((e) => {
        res.status(500).send();
      });

    }).catch((e) =>{
      res.status(500).send();
    });

  }).catch((e) =>{
    res.status(500).send();
  });

});

app.get('*', (req, res) => {
  res.status(418).sendFile(path.join(publicPath, 'index.html'));
});


