const TronWeb = require('tronweb');
const Soter = require('soter-sdk');

const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey: ''
})

const soter = new Soter(tronWeb)
async function userUploaded(){
    let raw_data =  {
        start_date: 1577774585986,
        end_date: 1577774612991,
        offset:0,
        limit: 10,
        is_deleted: false
    }

    let queryUserUploadedFiles =  await soter.query.userUploaded(raw_data);
    console.log(queryUserUploadedFiles)
}

userUploaded()