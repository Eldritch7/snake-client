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
    connection.write("Move: down");
  } else if (key === "a" || key === "A") {
    connection.write("Move: left");
  } else if (key === "d" || key === "D") {
    connection.write("Move: right");
  } else if (key === "z" || key === "Z") {
    connection.write("Say: NOO");
  } else if (key === "c" || key === "C") {
    connection.write("Say: YES!");
  } else if (key === "x" || key === "X") {
    connection.write("Say: :(");
  } else if (key === "q" || key === "Q") {
    connection.write("Say: AHH");
  } else if (key === "e" || key === "E") {
    connection.write("Say: :D");
  } else if (key === "r" || key === "R") {
    connection.write("Say: Hey!");
  }
  
 
  
});

module.exports = {
  setupInput
};