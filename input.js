const { connect } = require("http2");
const { stdin } = require("process");
let connection;

const setupInput = function(conn) {
  connection = conn;
  //console.log(conn);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = process.stdin.on('data', (key) => {


  if (key === '\u0003') {
    process.exit();
  } else if (key === "w" || key === "W") {
    //console.log("Move up!");
    connection.write("Move: up");
  } else if (key === "s" || key === "S") {
    //console.log("Move down!");
    connection.write("Move: down");
  } else if (key === "a" || key === "A") {
    //console.log("Move left!");
    connection.write("Move: left");
  } else if (key === "d" || key === "D") {
    //console.log("Move right!");
    connection.write("Move: right");
  }
  
 
  
});

module.exports = {
setupInput
};