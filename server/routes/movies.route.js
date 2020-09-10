// requires
const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.get( '/', ( req, res )=>{
    console.log( '/movies GET hit' );
    // set up query test
    const queryString = `SELECT * FROM movies LIMIT 20`; // tested in Postico first
    // try, then, catch with pool.query
    pool.query( queryString ).then( ( results )=>{
        // this code block runs if query is successful
        res.send( results.rows );
    }).catch( ( err )=>{
        // this code block runs if query errors out 
        console.log( ' -----------------------> ERROR GETTING MOVIES:', err );
        res.sendStatus( 500 );
    }) // end try/then/catch with query
}) // end /movies GET

router.post( '/', ( req, res )=>{
    console.log( '/movies POST hit, tryin to add movie:', req.body );
    res.send( 'ribbet' )
}) // end POST

// exports
module.exports = router;
