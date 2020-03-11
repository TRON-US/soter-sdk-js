const fs = require('fs');

const readableStreamForFile = fs.createReadStream('./soter.png');
const TronWeb = require('tronweb');
const Soter = require('../../dist/Soter-sdk.node');


var tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: ''
})

var soter = new Soter(tronWeb)

async function addfile() {
    let addStream = await soter.addStream.addStreamFile(readableStreamForFile)
    console.log(addStream)
}

addfile()