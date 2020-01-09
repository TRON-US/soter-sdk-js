const {assert, soterBuilder, net } = require('../../helpers/includes')
const TronWeb = require('tronweb');
const Blob = require('node-blob');
const fs = require('fs');
const path = require('path');

describe('#Add functional unit test', function () {

    let soter;

    before(async function () {
        this.timeout(10000)
        soter = soterBuilder.createInstance(net)
    });

    after(async function () {
        this.timeout(10000)
    });

    //  userInformation
    describe('#Add addFile', function () {
        this.timeout(10000)

        it('addFile', async function () {
            let img = path.join(__dirname, `./demo.png`)
            // let readStream = fs.createReadStream(img)
          
            fs.readFile(img, 'binary', async function (err, data) {
                if (err) throw err

                console.log(data)
                  let res = await soter.add.addFile(data)
                assert.equal(res.code, 0)
              })

            // let res = await soter.add.addFile(readStream)
            //     assert.equal(res.code, 0)
        });

        // it('userSignInformationRawData', async function() {
        //     let data = {
        //         email: 'user@email.com',
        //         phone_number: '15712341234',
        //     }

        //     let res = await soter.update.userSignInformationRawData(data)
        //     assert.isNotEmpty(res)    
        // })

        // it('userSignInformation', async function() {
            
        //     const newTronWeb = new TronWeb({
        //         fullHost: 'https://api.trongrid.io',
        //         privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
        //     });

        //     let data = {
        //         email: 'user@email.com',
        //         phone_number: '15712341234',
        //     }

        //     let rawData = await soter.update.userSignInformationRawData(data)

        //     let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(rawData)))

        //     let res = await soter.update.userSignInformation(
        //         'THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv', 
        //         rawData, 
        //         signature
        //     )

        //     assert.equal(res.code, 0)
        // })

    });

})