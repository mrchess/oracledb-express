var express = require('express');
var app = express();

var oracledb = require('oracledb');

app.get('/', function (req, res) {
  var creds = {
    user: "system",
    password: "oracle",
    connectString: "127.0.0.1:1521/orcl"
  }  

  oracledb.getConnection(creds, function(err, connection) {
     connection.release(function(err) {
        res.send('Hello World!');
     })
  });

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});