const express = require('express'); // Import express
const router = express.Router(); // Link the express router
const Pokemon = require('../db.json'); // We require our DB for this
const request = require('request'); // Request to handle requests

// Register the router with the app:
router.get('/:pokeId', function(req, res, next){
  console.log("GET DELETE!!");
    // NATE:
    var deletedIndex = 0; // The index which the poke is to be deleted at
    var Pokes = Pokemon.pokemon;
    // loop to find index
    for(var i = 0; i < Pokes.length; i++){
      if (Pokes[i].id == req.params.pokeId){
        deletedIndex = i;
      }
    }

    console.log("deletedIndex = " + deletedIndex)
    console.log("req.params.pokeId = " + req.params.pokeId)

    // Instead of passing the body, like in views, we pass the db.json object. 
    // We then use the deletedIndex as a reference to the index in the object array  and not req.params.pokeId, which would be one ahead.
    res.render('delete',{
      title : "Delete",
      poke : Pokemon.pokemon,
      index : deletedIndex,
    });

});

router.post('/:pokeId', function(req, res, next){
    request({
        url: 'http://localhost:8000/pokemon/' + req.params.pokeId,
        method: 'DELETE'        
    },
    function(error, response, body){
        res.render('index', {
          title: "It\'s Pokemon time!",
          pokemon: Pokemon,
          message: "Deleted"
        });
    });
    // res.redirect('/');
});

module.exports = router; // To make this router availble to our app when importing it