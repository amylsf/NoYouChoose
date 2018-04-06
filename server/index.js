let express = require('express');
let parser = require('body-parser');

let app = express();
let port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
