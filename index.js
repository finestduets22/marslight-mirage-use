const marslight_mirage = require('marslight-mirage');
const marslight_mirage_use = require('marslight-mirage-use');
const pg = require('pg');
const redux = require('redux');
const solc = require('solc');
const firebase = require('firebase');
const axios = require('axios');
const ethers = require('ethers');
const mocha = require('mocha');
const ejs = require('ejs');
const bluebird = require('bluebird');
const ganache_cli = require('ganache-cli');
const babel_core = require('babel-core');
const nodemon = require('nodemon');

const { Duplex } = require('stream');
const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});
inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);

const fs = require('fs');
fs.appendFile('file.txt', 'New content\n', err => {
  if (err) throw err;
  console.log('Content appended to file');
});

const myURL = new URL('https://example.org/foo?bar=baz');
console.log(`Pathname: ${myURL.pathname}`);

// Get the list of all available providers for Web3
const providers = Web3.providers;
console.log('Available providers:', providers);

const fs = require('fs');
fs.writeFile('output.txt', 'Hello, this is some text.', 'utf8', (err) => {
  if (err) throw err;
  console.log('File has been written.');
});