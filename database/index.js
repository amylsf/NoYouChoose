let mongoose = require('mongoose');
mongoose.connect('mongodb://user:12345@ds235239.mlab.com:35239/sfdb');

let savedSchema = mongoose.Schema({
  id: {type: String, unique: true},
  name: String,
  category: String,
  url: String,
  rating: Number,
  price: String,
  image: String
})

let Favorite = mongoose.model('Favorite', savedSchema);

let save = (restaurant) => {
  return  Favorite.create({
    id: restaurant.id,
    name: restaurant.name,
    category: restaurant.categories[0].title,
    url: restaurant.url,
    rating: restaurant.rating,
    price: restaurant.price,
    image: restaurant.image_url
  }).catch((err) => {
    console.log(err);
  });       
}

module.exports.save = save;
module.exports.Favorite = Favorite;