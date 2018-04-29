const bunyan = require( 'bunyan' )

const log = bunyan.createLogger( {
  name : 'generic-server',
  serializers : bunyan.stdSerializers,
  streams : [ {
    type : 'rotating-file',
    path : `${process.env.LOG_DIR || './logs'}/generic-server.log`,
    period : '1d', 
    count : 3,
    level : process.env.LOG_LEVEL || 'info', // ENUM : trace, debug, info, warn, err, fatal 
  } ]
} )

module.exports = log