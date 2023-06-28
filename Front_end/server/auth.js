const session = require('express-session');
const MongoStore = require ('connect-mongo');

//create a connection for a session
//create the session for the user and store it in the tenKAuth db users collection/session collection?
//create and export a method that checks and verifies sessions