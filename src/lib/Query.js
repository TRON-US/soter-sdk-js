import Index from '.';
import { dateNow } from '../utils/Apis';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb

    }

    async userBalance(fromAddress = this.tronWeb.defaultAddress.base58) {

        this.validator.validateAddress(fromAddress)

        let timestamp = Date.parse(new Date())

        let unSigned = {
            user_address: fromAddress,
            timestamp: timestamp
        }
     
        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(unSigned)))

        let options = {
            user_address: fromAddress,
            raw_data: {
                user_address: fromAddress,
                timestamp
            },
            signature
        }

        const response = await this.client({
            url: `/api/v1/balance`,
            params: options,
            method: 'get'
        })
        
        return response.data
    }

    async queryUserDepositHistory(fromAddress = this.tronWeb.defaultAddress.base58, options = {}, signature) {
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

    async queryUserUploadedFiles(options, signature) {

        let data = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: options,
            signature: signature
        }

        const response = await this.client({
            url: `/api/v1/files`,
            params: data,
            method: 'get'
        })
        
        return response.data

    }

}