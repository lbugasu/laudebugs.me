//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

const db = require("./db");
const dbName = "laudebugs";
const collectionName = "messages";

db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });

}, function (err) { // failureCallback
    throw (err);
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);