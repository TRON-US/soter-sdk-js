import Index from './index';

export default class Set extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
        
    }

    async setAutopay(autopay = true) {
        let setTimestamp = Date.parse(new Date())
        let setUnSigndata = {
            autopay,
            timestamp: setTimestamp
        }
        let setSignature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(setUnSigndata)))

        let setRawdata = {
            user_address: this.tronWeb.defaultAddress.base58 ,
            raw_data: setUnSigndata,
            signature: setSignature
        }

        const setResponse = await this.client({
            url: `/api/v1/autopay`,
            data: setRawdata,
            method: 'post'
        })
        
        return setResponse.data
    }

 
}