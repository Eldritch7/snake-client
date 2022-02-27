//CONNECT function

const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here (in constrants)
    port: PORT  // PORT number here (in constrants)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    //Gives your snake SV initials
    conn.write("Name: SV");

    
  });

  conn.on("data", (data) => {
    console.log("Server Says:", data);
  });

  return conn;
};



module.exports = {
  net,
  connect
};