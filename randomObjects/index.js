var express = require('express')
var app = express()
var random = require('random-name')
var random_city = require("random-world")
var coolImages = require('cool-images')
var user_id = 0;
app.get('/', (req, res) => {
  var all = [];
  for (var i = 0; i < 5; i++) {
    user_id++
    var sex;
    if(getRandomInt(1,3) == 1){
      sex = 'Female'
    }else{
      sex = 'Male'
    }
    var obj = {
      id: user_id,
      photo: coolImages.one(),
      first_name: random.first(),
      last_name: random.last(),
      age: getRandomInt(15, 45),
      sex: sex,
      live: {
        country: random_city.country(),
        city: random_city.city()
      }
    }
    all.push(obj)
  }
  res.send(JSON.stringify(all))
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.listen(1337, () => {
  console.log('Server listening on port 1337');
})
