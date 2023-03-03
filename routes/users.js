var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Alice'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {   
  res.json(users);
});

router.get('/', (req, res, next) => {    //samma som ovan, annan syntax bara
  res.send('respond with a resource!');
});

module.exports = router; // här exporterar vi ut alla routers 


//req är alla data vi skickar in till routern
//res är alla data vi skickar tillbaka till routern
//next är om vi vill göra async, dvs skickar till next och går vidare till nästa router

//req och res måste vara med för att routern ska funka, next är inte ett måste