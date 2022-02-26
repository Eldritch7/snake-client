//This will serve as our main file
// through which we will launch the game client
const { stdin } = require("process");
const {net, connect} = require("./client");


console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {


  if (key === '\u0003') {
    process.exit();
  }
  
 
  
};
setupInput();
