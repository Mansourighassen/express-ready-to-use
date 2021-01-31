const config = require( "./config" );
const mongoose = require( "mongoose" );
const logger = require( "./services/Logger/Logger" );

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};


// Connect to the DB an initialize the app if successful
mongoose.connect( config.dbUrl, mongooseOptions )
  .then( () => {
    logger.info( "Database connection successful" );

    // Create express instance to setup API
    const ExpressLoader = require( "./loaders/Express" );
    new ExpressLoader();
  } )
  .catch( err => {
    //eslint-disable-next-line
    console.error( err );
    logger.error( err );
  } );