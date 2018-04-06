let mongoose = require('mongoose');
mongoose.connect();

let savedSchema = mongoose.schema({
  id: {type: String, unique: true},
  name: String,
  type: String,
  location: String,
  url: String,
  rating: Number,
  price: String
})

let Saved = mongoose.model('Saved', savedSchema);
