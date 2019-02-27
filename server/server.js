const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://heroku_4n9lqqvk:gpr0d89kotgaqj4tbko9pm66fd@ds221435.mlab.com:21435/heroku_4n9lqqvk';
const dbName = 'heroku_4n9lqqvk';

MongoClient.connect(url, function (err, client) {
  if (err){
    console.log("unable to connect to mongo server", err)
  } else {
    console.log('Connection established to', url);
    const db = client.db(dbName);
    const collection = db.collection('NALCS');
    client.close();

  }
});

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
