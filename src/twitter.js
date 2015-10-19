'use strict';

var twitter = require('ntwitter');
var fs = require('fs');
var credentials = JSON.parse(fs.readFileSync('.twitty.json', 'utf8'));

module.exports = {
  send: (message, callback) => {
    
    console.log(credentials);
    console.log(message);

    var twit = new twitter(credentials);

    twit.verifyCredentials(function (err, data) {
      if(err !== null){
        return callback('HTTP Error 401: Unauthorized!');
      }
    });

    twit.updateStatus(message, callback);

  }
}
