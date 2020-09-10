// requires
const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res )=>{
    console.log( '/movies GET hit, this will responde with movies' );
    res.send( 'woof' );
}) // end /movies GET

router.post( '/', ( req, res )=>{
    console.log( '/movies POST hit, tryin to add movie:', req.body );
    res.send( 'ribbet' )
}) // end POST

// exports
module.exports = router;
