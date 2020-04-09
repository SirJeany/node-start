var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:pokeId', function(req, res, next){
    request.get(
        'http://localhost:8000/pokemon/' + req.body.pokeId,
        function(error, response, body){
            console.log("Body: ", body);
            res.render('delete', {message: false, poke: JSON.parse(body)});
        }
    );
});