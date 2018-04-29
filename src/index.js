require( 'dotenv' ).config() // Gives us access to .env variables
const log = require( './Log' ) // Logging Configuration


log.info( 'Server Started' )
// console.log( [1,2,3].map( el => el ** 2 ), [{a:1},{a:2},{a:3}].find( el => el.a === 3 ) )
// let y = { a : 1, b : 2, c : 3 }
// let z = { ...y, a: 2 }
// let x = `Im running version ${process.version}`
// console.log( z )
// console.log( process )