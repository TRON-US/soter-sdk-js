const TronWeb = require('tronweb');
const Soter = require('soter-sdk');

const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: ''
})

const soter = new Soter(tronWeb)
async function depositHistory(){

    let depositHistoryData = {
        start_date: 1572348598200,
        end_date: 1577434880000,
        offset: 0,
        limit: 10
    }

    let historyQuery =  await  soter.query.depositHistory(depositHistoryData)
    console.log(historyQuery)
}

depositHistory()