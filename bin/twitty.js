#! /usr/bin/env node
'use strict';

let constants = require('../src/constants.js')
let twitter = require('../src/twitter.js')

let command = process.argv[2];
let params = process.argv.slice(3);

if(command === constants.SEND){
  
  twitter.send(params[0], (err, data) => {
    
    if(err !== null)
      return console.error(err)  
    
    return console.log('Tweet sent successfully!')

  })

}

if(command === constants.HELP){
    console.log('Help for Twitty');
    console.log('');
    console.log('    twitter --send "<Message>"');
    console.log('        [Send a Tweet]');
    console.log('');
    console.log('    twitter --help');
}

