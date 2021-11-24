const { Schema, model} = require('mongoose');

const hotel = new Schema({
    name: String,
    place: String,
    capacity: Number,
    bedrooms: Number,
    nights: Number,
    image: String,
    cost: Number
})

module.exports = model('Hotels', hotel);