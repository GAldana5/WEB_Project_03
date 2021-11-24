const { Schema, model} = require('mongoose');

const history = new Schema({
    name: String,
    place: String,
    capacity: Number,
    bedrooms: Number,
    nights: Number,
    image: String,
    cost: Number
})

module.exports = model('Reservations', history);