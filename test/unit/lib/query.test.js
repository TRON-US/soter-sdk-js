const {assert, soterBuilder, net } = require('../../helpers/includes')
const TronWeb = require('tronweb');

describe('#Query functional unit test', function () {

    let soter;

    before(async function () {
        this.timeout(10000)
        soter = soterBuilder.createInstance(net)
    });

    after(async function () {
        this.timeout(10000)
    });

    // balance
    describe('#Query Balance', function () {
        this.timeout(10000)

        it('userBalance', async function () {
            let res = await soter.query.userBalance()
            assert.equal(res.code, 0)
        });

        it('userSignBalanceRawData', async function() {
            let res = await soter.query.userSignBalanceRawData('THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv')
            assert.isNotEmpty(res)
        })

        it('userSignBalance', async function() {
            
            const newTronWeb = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
            });

            let rawData = await soter.query.userSignBalanceRawData('THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv')

            let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(rawData)))

            let res = await soter.query.userSignBalance('THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv', rawData, signature)

            assert.equal(res.code, 0)
        })

    });

    // history
    describe('#Query DepositHistory', function() {
        this.timeout(10000);

        it('depositHistory', async function () {

            let res = await soter.query.queryUserDepositHistory({
                start_date: 1572348598200,
                end_date: 1577434880000,
                offset: 0,
                limit: 10
            });

            assert.equal(res.code, 0)
        });

        it('signDepositHistoryRawData', async function() {

            let res = await soter.query.signDepositHistoryRawData({
                    start_date: 1572348598200,
                    end_date: 1577434880000,
                    offset: 0,
                    limit: 10
                })
            assert.isNotEmpty(res)
        });

        it('signDepositHistory', async function() {

            const newTronWeb = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
            })

            let userRawData = await soter.query.signDepositHistoryRawData({
                start_date: 1572348598200,
                end_date: 1577434880000,
                offset: 0,
                limit: 10
            })

            let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(userRawData)))


            let res = await soter.query.signDepositHistory(
                'THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv',
                userRawData,
                signature
            )
            assert.equal(res.code, 0)
        })
      
    })

    // OrderList
    describe('#Query OrderList', function() {
        this.timeout(10000);

        it('userOrderList', async function() {
            let res = await soter.query.userOrderList({
                    start_date: 1572348598200,
                    end_date: 1577434880000,
                    offset: 0,
                    limit: 10
                })
            assert.equal(res.code, 0)
        })

        it('userSignOrderListRawData', async function() {
            let res = await soter.query.userSignOrderListRawData({
                    start_date: 1572348598200,
                    end_date: 1577434880000,
                    offset: 0,
                    limit: 10
                })
            
            assert.isNotEmpty(res)    
        })

        it('userSignOrderList', async function() {

            const newTronWeb = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
            })

            let userRawData = await soter.query.userSignOrderListRawData({
                start_date: 1572348598200,
                end_date: 1577434880000,
                offset: 0,
                limit: 10
            })

            let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(userRawData)))
            
            let res = await soter.query.userSignOrderList(
                'THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv',
                userRawData,
                signature
            )

            assert.equal(res.code, 0)
        })
    })

    // userUploaded
    describe('#Query Uploaded', function() {
        this.timeout(10000);

        it('userUploaded', async function() {

            let res = await soter.query.userUploaded({
                    start_date: 1577774585986,
                    end_date: 1577774612991,
                    offset:0,
                    limit: 10,
                    is_deleted: false
                })

            assert.equal(res.code, 0)
        })

        it('userSignUploadedRawData', async function() {

            let res = await soter.query.userSignUploadedRawData({
                    start_date: 1577774585986,
                    end_date: 1577774612991,
                    offset:0,
                    limit: 10,
                    is_deleted: false
                })

            assert.isNotEmpty(res)    
        })

        it('userSignUploaded', async function() {

            const newTronWeb = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
            })

            let userRawData = await soter.query.userSignUploadedRawData({
                    start_date: 1577774585986,
                    end_date: 1577774612991,
                    offset:0,
                    limit: 10,
                    is_deleted: false
            })

            let signature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(userRawData)))

            let res = await soter.query.userSignUploaded(
                    'THq4ALz1irs8XXckpQESAPcxFLFbRpGpCv',
                    userRawData,
                    signature
                );

                assert.equal(res.code, 0)
        })

    })

})