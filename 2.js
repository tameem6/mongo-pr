const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

mongoose.connection.once('open',()=>{
    
    console.log("Connection successful");
}).on('error', (err) =>{
    console.log('Connection error',err);
});