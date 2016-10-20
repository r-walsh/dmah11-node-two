const express = require( "express" );
const { json } = require( "body-parser" );
const app = express();
const port = 4000;

let isAuthenticated = false;
function checkAuth( req, res, next ) {
	if ( isAuthenticated ) {
		return next();
	}

	return res.status( 401 ).json( "Unauthorized, please login" );
}

app.post( "/api/auth", ( req, res ) => {
	isAuthenticated = true;
	res.end();
} );
app.use( json() );
app.use( checkAuth );

const movieRoutes = require( "./features/movie/movieRoutes" );
movieRoutes( app );


app.listen( port, () => console.log( `Express listening on ${ port }` ) );

/*
index.js
features/
	users/
		userRoutes
		userCtrl
 */


/*
index.js
controllers/
	userCtrl
routes/
	userRoutes
 */
