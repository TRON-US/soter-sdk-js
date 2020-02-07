// const {assert, soterBuilder, net } = require('../../helpers/includes')
// const TronWeb = require('tronweb');

// describe('#Set functional unit test', function () {

//     let soter;

//     before(async function () {
//         this.timeout(10000)
//         soter = soterBuilder.createInstance(net)
//     });

//     after(async function () {
//         this.timeout(10000)
//     });

//     //  SetAutopay
//     describe('#Set SetAutopay', function () {
//         this.timeout(10000)

//         it('setAutopay', async function () {
//             let res = await soter.set.setAutopay(false)
//             assert.equal(res.code, 0)
//         });

//         it('setSignAutopayRawData', async function() {
//             let res = await soter.set.setSignAutopayRawData(false)
//             assert.isNotEmpty(res)    
//         })

//         it('setSignAutopay', async function() {
            
//             const newTronWeb = new TronWeb({
//                 fullHost: 'https://api.trongrid.io',
//                 privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
//             });

//             let rawData = await soter.set.setSignAutopayRawData(false)

//             let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(rawData)))

//             let res = await soter.set.setSignAutopay(
//                 'THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv', 
//                 rawData, 
//                 signature
//             )

//             assert.equal(res.code, 0)
//         })

//     });

// })