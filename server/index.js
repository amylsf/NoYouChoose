let express = require('express');
let parser = require('body-parser');
let request = require('request');
let token = require('../config.js').API_TOKEN;
let db = require('../database');

let app = express();
let port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

let getSearchResults = (query, location, callback) => {
  let options = {
    url: 'https://api.yelp.com/v3/businesses/search',
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    qs: {
      term: query,
      location: location,
      radius: 1000,
      limit: 20,
      open_now: true,
      price: "1, 2, 3, 4"
    }
  }
  
  request.get(options, function(err, resp, body) {
    if (err) {
      console.error(err);
    } else {
      callback(JSON.parse(body));
    }
  })
}

app.post('/search', function(req, res) {
  getSearchResults(req.body.term, req.body.location, function(data) {
    res.status(201).send(JSON.stringify(data));
  })
})

app.post('/save', function(req, res) {
  db.save(req.body.item).then(() => {
    res.status(201).send('Saved!');
  })
})

app.get('/save', function(req, res) {
  let favorite = db.Favorite.find({})
  .then(data => res.send(data))
})

module.exports.app = app;

