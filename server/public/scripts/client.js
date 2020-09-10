$( document ).ready( onReady );

function addMovie(){
    console.log( 'in addMovie' );
    // get user 411 and put it in an object to send to server
    const objectToSend={
        title: $( '#titleIn' ).val(),
        poster: $( '#posterIn' ).val(),
        description: $( '#descriptionIn' ).val()
    }
    // send object to server via POST
    $.ajax({
        method: 'POST',
        url: '/movies',
        data: objectToSend
    }).then( function( response ){
        // runs if successful
        console.log( 'back from POST:', response );
        getMovies();
    }).catch( function( err ){
        // runs if there was an error
        console.log( err );
        alert( 'nope' )
    }) // end AJAX
} // end addMovie

function getMovies(){
    $.ajax({
        method: 'GET',
        url: '/movies'
    }).then( function( response ){
        let el = $( '#moviesOut' );
        el.empty();
        for( let i=0; i< response.length; i++ ){
            el.append( `<li>${ response[ i ].title}: ${ response[i].description }</li>`)
        }
    }).catch( function( err ){
        console.log( err );
        alert( 'problem!' )
    })
}

function onReady(){
    $( '#addMovieButton' ).on( 'click', addMovie );
    getMovies();
} // end onReady