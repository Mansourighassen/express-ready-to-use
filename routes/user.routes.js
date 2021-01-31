const express = require( 'express' );

let router = express.Router();

router.get( '/users/:id', ( req, res ) => {
  res.send( { message : 'Hello from users!'+req.params.id } );
} );

module.exports = router;