const TronWeb = require('tronweb');
const Soter = require('soter-sdk');
const TronStation = require('tronStation');

var tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: 'xx'
})

var soter = new Soter(tronWeb)

async function userInformation() {
    let data = {
        email: 'user@email.com',
        phone_number: '15712341234',

    }

    let updateInformation = await soter.update.userInformation(data)   
    console.log(updateInformation)
}

userInformation()