const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //importing a constructor function to use a instance of Web3

const web3 = new Web3(ganache.provider()); //new instance of Web3
