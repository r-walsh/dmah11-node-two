const movies = [
	{
		title: "300"
		, genre: "action"
		, _id: "0"
	}
	, 	{
		title: "Alice in Wonderland"
		, genre: "fantasy"
		, _id: "1"
	}
	, {
		title: "Zootopia"
		, genre: "action"
		, _id: "2"
	}
];

module.exports = {
	getMovies( req, res ) {
		res.status( 200 ).json( movies );
	}

	, getMovie( req, res ) {
		console.log( req.params );
		for ( let i = 0; i < movies.length; i++ ) {
			if ( movies[ i ]._id === req.params.id ) {
				return res.status( 200 ).json( movies[ i ] );
			}
		}
		return res.status( 404 ).json( "Movie not found" );
	}

	, searchMovies( req, res ) {
		const results = movies.filter( movie => movie.genre === req.query.genre );
		// const results = movies.filter( function( movie ) { return movie.genre === req.query.genre } );
		return res.status( 200 ).json( results );
	}

	, postMovie( req, res ) {
		movies.push( req.body );
		console.log( "in postMovie" );
		return res.status( 201 ).json( movies );
	}
};
