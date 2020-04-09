var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:id', function(req, res, next){
    request.get(
        'http://localhost:8000/pokemon/' + req.body.pokeId,
        function(error, response, body){
            console.log("Body: ", body);
            
        }
    );
});