const net = require('net');

function connect() {
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
    conn.write('Name: KLK')
    //setInterval(()=>{conn.write('Move: up')},500)
  });
  conn.on('connect_timeout', () => {
  });

  return conn;
}





module.exports = {connect};