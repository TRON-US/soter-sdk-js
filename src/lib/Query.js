import Index from './Index';
// import utils from 'utils';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    async userBalance(fromAddress = this.tronWeb.defaultAddress.base58, signature = '', timestamp) {
        this.validator.validateAddress(fromAddress)

        let rawdata = {
            user_address: fromAddress,
            raw_data: {
                user_address:  fromAddress,
                timestamp
            },
            signature: signature
        }

        const response = await this.client({
            url: `/api/v1/balance`,
            params: rawdata,
            method: 'get'
        })
        
        return response.data
    }

    async queryUserDepositHistory(fromAddress = this.tronWeb.defaultAddress.base58, options = {}, signature = '' ) {
        this.validator.validateAddress(fromAddress)

        let data = {
            user_address: fromAddress,
            raw_data: options,
            signature: signature
        }

        const response = await this.client({
            url: `/api/v1/history`,
            params: data,
            method: 'get'
        })
        
        return response.data

    }

    async queryUserOrderList() {
        // const response = await this.client({
        //     url: `/api/v1/history`,
        //     params: data,
        //     method: 'get'
        // })
        
        // return response.data
    }

    async queryUserUploadedFiles() {

    }

}