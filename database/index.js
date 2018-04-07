let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/noyouchoose');

let savedSchema = mongoose.schema({
  id: {type: String, unique: true},
  name: String,
  type: String,
  location: String,
  url: String,
  rating: Number,
  price: String
  //timestamp
})

let Saved = mongoose.model('Saved', savedSchema);

let save = (restaurants) => {
  return Saved.create(restaurants).catch((err) => {});
               
}