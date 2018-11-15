// keys.js -- figure out what set of credentials to return

// this will tell heroku if we are development or production mode
if (process.env.NODE_ENV === 'production'){
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development (local) - return the dev keys!!!
    module.exports = require('./dev');
}
