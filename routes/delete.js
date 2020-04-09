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
            res.render('delete', {poke: JSON.parse(body)} );
        });
});

router.get('/:pokeId', function(req, res, next) {
    request({
        url: 'http://localhost:8000/pokemon/' + req.params.pokeId,
        method: "DELETE",
        form: {
            name: req.body.updateName
            // image: req.body.updateImage
        }
    },
    function(error, response, body) {
        console.log("The new body:");
        console.log(body);
        // res.render.apply('patch', {message: "Updated Successfully"});
    }
    );

    res.redirect('/views/' + req.params.pokeId);
});

module.exports = router;