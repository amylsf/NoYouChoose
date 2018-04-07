let express = require('express');
let parser = require('body-parser');
let request = require('request');
let token = require('../config.js').API_TOKEN;

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
      radius: 1200,
      limit: 30,
      open_now: true
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
  getSearchResults(req.body.term, '369 Lexington Ave, New York', function(data) {
    res.status(201).send(JSON.stringify(data));
  })
})

app.get('/search', function(req, res) {
  res.send();
})

module.exports.app = app;

