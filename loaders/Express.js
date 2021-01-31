const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require( "../config" );
const logger = require( "../services/Logger/Logger" );
const routes = require( "../routes" );

class ExpressLoader {
constructor(){

    const app = express();
    var corsOptions = {
        origin: "http://localhost:8081"
      };
      app.use( ExpressLoader.errorHandler );

      app.use(cors(corsOptions));
      app.use(bodyParser.json());
      routes( app );
      this.server = app.listen( config.port, () => {
        logger.info( `Express running, now listening on port ${config.port}` );
      } );
}
    get Server () {
        return this.server;
      }

       /**
   * @description Default error handler to be used with express
   * @param error Error object
   * @param req {object} Express req object
   * @param res {object} Express res object
   * @param next {function} Express next object
   * @returns {*}
   */
  static errorHandler ( error, req, res, next ) {
    let parsedError;

    // Attempt to gracefully parse error object
    try {
      if ( error && typeof error === "object" ) {
        parsedError = JSON.stringify( error );
      } else {
        parsedError = error;
      }
    } catch ( e ) {
      logger.error( e );
    }

    // Log the original error
    logger.error( parsedError );

    // If response is already sent, don't attempt to respond to client
    if ( res.headersSent ) {
      return next( error );
    }

    res.status( 400 ).json( {
      success: false,
      error
    } );
  }




}
module.exports = ExpressLoader;
