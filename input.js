let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (stdin) {
  if (stdin === '\u0003') {
    process.exit();
  }
  if (stdin === "w") {
    connection.write('Move: up')
  }
  if (stdin === "a") {
    connection.write('Move: left')
  }
  if (stdin === "s") {
    connection.write('Move: down')
  }
  if (stdin === "d") {
    connection.write('Move: right')
  }
}

module.exports = {setupInput}