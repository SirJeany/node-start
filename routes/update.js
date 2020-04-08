var express = require('express');
var router = express.Router();
var request = require('request');


// router.get("/:pokeId", function(req, res, next){
//     // res.send("Got a patch request from the user")
    
//     request.patch(
//         'http://localhost:8000/pokemon/' + req.params.pokeId,
//         function(error, response, body){
//             console.error('error:', error);
//             console.log("req.body = ");
//             console.log(req.body);
//             console.log('statusCode:', response && response.statusCode);
//             console.log('body:', body);
//             res.render('views', {poke: JSON.parse(body)} );
//         }
//     );
//     // request(
//     //     'http://localhost:8000/pokemon/' + req.params.pokeId, 
//     //     "PATCH",
//     //     function (error, response, body) {
//     //         console.error('error:', error); // Print the error if one occurred
//     //         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //         console.log('body:', body); // Print the HTML for the Google homepage.
//     //         res.render('views', {poke: JSON.parse(body)} );
//     //     }
//     // );
    
// });

router.patch("/:pokeId", function(req, res, next){
    res.send("Got a patch request from the user")
});

module.exports = router;