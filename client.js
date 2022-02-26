//CONNECT function

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: SV");
    //MOVE up in the original .on connect
    /*setTimeout(() => {
      conn.write("Move: up");

    }, 1000);*/
    
  });
  //conn.on("connect", () => {
//MOVE UP using setTimeout
  /*setTimeout(() => {
    conn.write("Move: up");
  }, 50);
  setTimeout(() => {
    conn.write("Move: up");
  }, 100);
  setTimeout(() => {
    conn.write("Move: up");
  }, 150); */
  //MOVE UP using setInterval
  /*setInterval(() => {
    conn.write("Move: up");
  }, 50); */
  //});
  conn.on("data", (data) => {
    console.log("Server Says:", data);
    // code that does something when the connection is first established
  });

  return conn;
};



module.exports = {
  net,
  connect
};