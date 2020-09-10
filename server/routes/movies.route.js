// requires
const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );
const { query } = require('../modules/pool');

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
    console.log( '/movies POST hit:', req.body );
    const queryString = `INSERT INTO movies ( title, poster, description ) values ( $1, $2, $3 )`; // tested in Postico and hard coded at first before using $wildcards
    // try, then, catch with pool.query
    pool.query( queryString, [ req.body.title, req.body.poster, req.body.description ] ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( '------------------------> ERROR ADDING MOVIE:', err );
        res.sendStatus( 500 );
    })
}) // end POST

// exports
module.exports = router;
