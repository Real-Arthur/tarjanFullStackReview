// requires
const pg = require( 'pg' );

const pool = new pg.Pool({
    database: 'saga_movies_weekend',
    host: 'localhost',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
})

// exports
module.exports = pool;