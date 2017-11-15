var WebSocket = require('ws');
var ws = new WebSocket(process.argv[2]);
ws.on('open', function() {
  ws.send('something');
});
ws.on('message', function(data, flags) {
  console.log('received: %s', data);
});
ws.on('close', function() {
  console.log('disconnected');
});
