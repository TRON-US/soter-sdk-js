const TronWeb = require('tronweb');
const Soter = require('soter-sdk');

const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: ''
})

const soter = new Soter(tronWeb)
async function userOrderList(){

    let userOrderListData = {
        start_date: 1572348598200,
        end_date: 1577434880000,
        offset: 0,
        limit: 10
    }

    let userOrderList =  await  soter.query.userOrderList(userOrderListData)
    console.log(userOrderList)
}

userOrderList()