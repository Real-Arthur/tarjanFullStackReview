// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const movies = require( './routes/movies.route' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/movies', movies );

// globals
const port = 3000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) // end server up

