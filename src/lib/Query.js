import Index from './Index';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    async userBalance() {
        console.log(this.soter)
        console.log(this.tronWeb)
        let timestamp = Date.parse( new Date())/1000;
        
        let rawdata = {
            useraddr:  this.tronWeb.defaultAddress.base58,
            timestamp: timestamp
        }

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(rawdata)));

        console.log(signature)
    }

}