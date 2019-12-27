import Index from './Index';

export default class Add extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    async setAutopay() {

        let timestamp = Date.parse(new Date())
        let data = {
            autopay: 'yes',
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