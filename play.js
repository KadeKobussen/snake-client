const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // define event listener for incoming data
  conn.on('data', (data) => {
    console.log('data:', data);
  });
  conn.on('connect', () => {
    console.log('snake initiated')
  });
  conn.on('connect_timeout', () => {
  });

  return conn;
};

console.log("Connecting ...");
connect();