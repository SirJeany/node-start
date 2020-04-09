var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request'); 



router.get('/:pokeId', function(req, res, next) {
    //make GET request to database
    request(
        'http://localhost:8000/pokemon/' + req.params.pokeId,
        "GET",
        function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.render('views', {poke: JSON.parse(body)} );
        });

    request(
        'http://localhost:8000/pokemon/' + req.params.pokeId,
        "DELETE",
    )
});



//// HANDLING UPDATE INSIDE THE VIEW:
// router.post('/:pokeId', function(req, res, next){
//     console.log('HELLO IM POSTING')
//     request({
//         url: 'http://localhost:8000/pokemon/' + req.params.pokeId,
//         method: "POST",
//         form: {
//             name: req.body.updateName
//         }
//     },
//     function(error, response, body){
//         console.log('body:', body); // Print the HTML for the Google homepage.
//         // res.render('views', {poke: JSON.parse(body)} );
//         res.render('update', {poke: JSON.parse(body)})
//     });
// });

module.exports = router;