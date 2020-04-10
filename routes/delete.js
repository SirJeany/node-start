const express = require('express'); // Import express
const router = express.Router(); // Link the express router
const Pokemon = require('../db.json'); // We require our DB for this
const request = require('request'); // Request to handle requests

// Register the router with the app:
router.get('/:pokeId', function(req, res, next){

    // NATE:
    var id = 0;
    var Pokes = Pokemon.pokemon;
    // loop to find index
    for(var i = 0; i < Pokes.length; i++){
      if (Pokes[i].id == req.params.id){
        id = i;
      }
    }

    console.log(id);

    res.render('delete',{
      title : "Delete",
      poke : Pokemon.pokemon[id],
      id : id,
    });

    // Find id in the db:
    // var pokes = Pokemon.pokemon;
    // var id = Number(pokes.length);

    // var pokesId = pokes[1].id;

    // for(var i = 0; i <= pokes.length; i++){
    //     if(pokesId == id){
    //         id = i;
    //     }
    // }
    // console.log(id)
    // res.render('delete', {
    //     title: "Delete",
    //     poke: Pokemon.pokemon[req.params.pokeId],
    //     id: id
    // });
});

router.post('/:pokeId', function(req, res, next){
    request({
        url: 'http://localhost:8000/pokemon/' + req.params.pokeId,
        method: 'DELETE'        
    },
    function(error, response, body){
        res.render('index', {message: "Deleted"});
    });
    res.redirect('/');
});

module.exports = router; // To make this router availble to our app when importing it