//This will serve as our main file
// through which we will launch the game client

const {connect} = require("./client");
const {setupInput} = require("./input");


console.log("Connecting ...");

setupInput(connect());
