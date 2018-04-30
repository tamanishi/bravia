var bravia = require('./lib');
// Accepts two parameters: IP and PSKKey

bravia('192.168.10.202', '0000', function (client) {

  // Call a command
  client.exec('PowerOn');

  // List available commands
  client.getCommandNames(function (list) {
    console.log(list);
  });

  // // Call a command
  // client.exec('Netflix');

});
