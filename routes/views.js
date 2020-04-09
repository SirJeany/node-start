var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request'); 



router.get('/:pokeId', function(req, res, next) {
    //make GET request to database

    // IF: We are navigating to delete:
    if(req._parsedOriginalUrl.pathname.includes('delete')){
        console.log("Deleting!")
        request(
            'http://localhost:8000/pokemon/' + req.params.pokeId,
            "DELETE",
            function (error, response, body) {
                console.log('body:', JSON.stringify(body.name)); // Print the HTML for the Google homepage.
                let data = {
                    title: 'It\'s Pokemon time!',
                    pokemon: Pokemon,
                    message: "Deleted " + JSON.stringify(body)
                }
                res.render('index', data );
        });
    } else { // We simply get:
        request(
            'http://localhost:8000/pokemon/' + req.params.pokeId,
            "GET",
            function (error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.
                res.render('views', {poke: JSON.parse(body)} );
        });
    }
});



//// HANDLING DELETE INSIDE THE VIEW:
// router.get('/:pokeId', function(req, res, next){
//     console.log('HELLO IM DELETING')
//     request({
//         url: 'http://localhost:8000/pokemon/' + req.params.pokeId,
//         method: "POST",
//         form: {
//             name: req.body.updateName
//         }
//     });
//     function(error, response, body){
//         console.log('body:', body); // Print the HTML for the Google homepage.
//         // res.render('views', {poke: JSON.parse(body)} );
//         res.render('update', {poke: JSON.parse(body)})
//     });
// });

module.exports = router;