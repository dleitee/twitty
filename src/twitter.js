'use strict'

var Twitter = require('ntwitter')
var fs = require('fs')
var credentials = JSON.parse(fs.readFileSync('.twitty.json', 'utf8'))

module.exports = {
  send: (message, callback) => {
    var twit = new Twitter(credentials)

    twit.verifyCredentials(err => {
      if (err !== null) {
        return callback('HTTP Error 401: Unauthorized!')
      }
    })

    twit.updateStatus(message, callback)
  }
}
