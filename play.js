//This will serve as our main file
// through which we will launch the game client

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server Says:", data);
    // code that does something when the connection is first established
  });

  return conn;
};

console.log("Connecting ...");
connect();
