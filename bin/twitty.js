#! /usr/bin/env node

console.log(process.argv);

var readlineSync = require('readline-sync');
 
// Wait for user's response. 
var userName = readlineSync.question('Username: ');
 
// Handle the secret text (e.g. password). 
var password = readlineSync.question('Password: ', {
  hideEchoBack: true
});
console.log('User:' + userName + ' Password: ' + password + '!');