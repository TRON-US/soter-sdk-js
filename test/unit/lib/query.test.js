const {assert, soterBuilder, net } = require('../../helpers/includes')
const TronWeb = require('tronweb');

describe('#Query functional unit test', function () {

    let soter;

    before(async function () {
        this.timeout(10000);
        soter = soterBuilder.createInstance(net);
    });

    after(async function () {
        this.timeout(10000);
    });


    describe('#Query Soter', function () {
        this.timeout(10000);

        it('userBalance', async function () {
            let res = await soter.query.userBalance();
            assert.equal(res.code, 0);
        });

    });

})