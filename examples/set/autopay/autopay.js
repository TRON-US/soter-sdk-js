const TronWeb = require('tronweb');
const Soter = require('soter-sdk');
const TronStation = require('tronStation');

var tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: 'xxx'
})

var soter = new Soter(tronWeb)

async function setAutopay() {
    let autopay = await soter.set.setAutopay(false)
    console.log(autopay)
}

setAutopay()