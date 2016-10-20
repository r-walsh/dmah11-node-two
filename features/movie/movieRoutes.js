const movieCtrl = require( "./movieCtrl" );

module.exports = app => {
	// /api/movies/__id__
	app.get( "/api/movies", movieCtrl.getMovies );
	app.get( "/api/movies/search", movieCtrl.searchMovies );
	app.get( "/api/movies/:id", movieCtrl.getMovie );
	app.post( "/api/movies", addTimestamp, movieCtrl.postMovie );
};

function addTimestamp( req, res, next ) {
	console.log( "In addTimestamp" );
	req.body.timestamp = new Date();
	next();
}

// module.exports = function( app ) {
//
// }
