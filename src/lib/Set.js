import Index from './index';

export default class Set extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
        
    }

    async setAutopay(autopay = true) {
        let timestamp = Date.parse(new Date())
        let data = {
            autopay,
            timestamp
        }
        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(data)))

        let rawdata = {
            user_address: this.tronWeb.defaultAddress.base58 ,
            raw_data: data,
            signature: signature
        }

        const response = await this.client({
            url: `/api/v1/autopay`,
            data: rawdata,
            method: 'post'
        })
        
        return response.data
    }

 
}