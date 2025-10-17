require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://admin:admin@cluster003.sl64i8a.mongodb.net"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}