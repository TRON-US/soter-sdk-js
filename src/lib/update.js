import Index from './index';

export default class Update extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    
    async userInformation() {
        let data = {
            email: 'user@email.com',
            phone_number: '15712341234',
            timestamp
        }
        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(data)))

        let rawdata = {
            user_address: this.tronWeb.defaultAddress.base58 ,
            raw_data: data,
            signature: signature
        }

        const response = await this.client({
            url: `/api/v1/edit_profile`,
            data: rawdata,
            method: 'post'
        })
        
        return response.data
    }

 
}