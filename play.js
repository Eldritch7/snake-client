//This will serve as our main file
// through which we will launch the game client
const {net, connect} = require("./client");


console.log("Connecting ...");
connect();
