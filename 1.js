var mongoose=require('mongoose');


mongoose.connect('mongodb+srv://tameem:<password>@cluster0-i1pux.mongodb.net/test?retryWrites=true',{useNewUrlParser: true});

var pet = mongoose.model('pets', { name: String, breed:String, pet_id:Number });

// var dog = new pet({ name: 'Danny',breed:'German Shepherd',pet_id:1 });
var dog = new pet({ name: 'julie',breed:'pomerenian',pet_id:3 });


//insert new record into the document


const express = require('express')
const app = express();

app.get('/', function (req, res) {
  dog.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send('wowww')
    }
  });
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})