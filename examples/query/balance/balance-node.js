const TronWeb = require('tronweb');
const Soter = require('soter-sdk');

const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: ''
})

const soter = new Soter(tronWeb)
async function userBalance(){
    let userBlance =  await soter.query.userBalance()
    console.log(userBlance)
}

userBalance()