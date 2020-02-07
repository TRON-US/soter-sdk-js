// const {assert, soterBuilder, net } = require('../../helpers/includes')
// const TronWeb = require('tronweb');

// describe('#Update functional unit test', function () {

//     let soter;

//     before(async function () {
//         this.timeout(10000)
//         soter = soterBuilder.createInstance(net)
//     });

//     after(async function () {
//         this.timeout(10000)
//     });

//     //  userInformation
//     describe('#Set Information', function () {
//         this.timeout(10000)

//         it('userInformation', async function () {
//             let data = {
//                 email: 'user@email.com',
//                 phone_number: '15712341234',
//             }

//             let res = await soter.update.userInformation(data)
//             assert.equal(res.code, 0)
//         });

//         it('userSignInformationRawData', async function() {
//             let data = {
//                 email: 'user@email.com',
//                 phone_number: '15712341234',
//             }

//             let res = await soter.update.userSignInformationRawData(data)
//             assert.isNotEmpty(res)    
//         })

//         it('userSignInformation', async function() {
            
//             const newTronWeb = new TronWeb({
//                 fullHost: 'https://api.trongrid.io',
//                 privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
//             });

//             let data = {
//                 email: 'user@email.com',
//                 phone_number: '15712341234',
//             }

//             let rawData = await soter.update.userSignInformationRawData(data)

//             let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(rawData)))

//             let res = await soter.update.userSignInformation(
//                 'THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv', 
//                 rawData, 
//                 signature
//             )

//             assert.equal(res.code, 0)
//         })

//     });

// })