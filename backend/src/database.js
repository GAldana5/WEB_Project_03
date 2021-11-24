const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travelAgency');

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB connected')
});