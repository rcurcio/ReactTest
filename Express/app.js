var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    r = require('rethinkdb');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Credentials");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/login', function (req, res) {
    var connection = null;
    var data = null;
    r.connect( {host: 'localhost', port: 28016}, function(err, conn) {
        if (err) throw err;

        connection = conn;

        r.db('ReactTest').table('Users').run(connection, function(err, cursor) {
            if (err) throw err;
            cursor.toArray(function(err, result) {
                if (err) throw err;
                res.send(result, null, 2);
            })
        })

    })

});

app.post('/games', function (req, res) {
    var connection = null;
    var data = null;

    r.connect( {host: 'localhost', port: 28016}, function(err, conn) {
        if (err) throw err;

        connection = conn;

        r.db('ReactTest').table('games').insert(req.body).run(connection, function(err, result) {
            if (err) throw err;

            res.send(result, null, 2);
        })
    })
});

app.get('/games', function (req, res) {
    var connection = null;
    var data = null;

    r.connect( {host: 'localhost', port: 28016}, function(err, conn) {
        if (err) throw err;

        connection = conn;

        r.db('ReactTest').table('games').run(connection, function(err, cursor) {
            if (err) throw err;
            cursor.toArray(function(err, result) {
                if (err) throw err;
                res.send(result, null, 2);
            });
        })
    })
});


app.listen(3001, function() {
    console.log('Listening...');
});
