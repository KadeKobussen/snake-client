const net = require('net');

function connect() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('data:', data);
  });
  conn.on('connect', () => {
    console.log('snake initiated')
    conn.write('Name: KLK')
   // conn.write('Move: up')
  });
  conn.on('connect_timeout', () => {
  });

  return conn;
}





module.exports = {connect};