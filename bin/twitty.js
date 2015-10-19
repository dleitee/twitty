#! /usr/bin/env node
'use strict';

let constants = require('../src/constants.js')

let command = process.argv[2];
let params = process.argv.slice(3);

if(command === constants.SEND){
    return 'Sending';
}

if(command === constants.HELP){
    return 'Help';
}

