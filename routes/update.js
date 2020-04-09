var express = require('express');
var router = express.Router();
var request = require('request');


router.get("/:pokeId", function(req, res, next){
    // res.send("Got a patch request from the user")
    request.get(
        'http://localhost:8000/pokemon/' + req.params.pokeId, 
        function (error, response, body) {
            // console.error('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            // res.render('views', {poke: JSON.parse(body)} );
            res.render('update', {message: false, poke: JSON.parse(body)})
        }
    );
    
    router.post('/:pokeId', function(req, res, next) {
        request({
            url: 'http://localhost:8000/pokemon/' + req.params.pokeId,
            method: "PATCH",
            form: {
                name: req.body.updateName,
                image: req.body.updateImage
            }
        },
        function(error, response, body) {
            console.log("The new body:");
            console.log(body);
            // res.render.apply('patch', {message: "Updated Successfully"});
        }
        );
    });
    res.redirect('/views/' + req.params.pokeId);

    // request(
    //     'http://localhost:8000/pokemon/' + req.params.pokeId, 
    //     "PATCH",
    //     function (error, response, body) {
    //         console.error('error:', error); // Print the error if one occurred
    //         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //         console.log('body:', body); // Print the HTML for the Google homepage.
    //         res.render('views', {poke: JSON.parse(body)} );
    //     }
    // );
    
});

module.exports = router;