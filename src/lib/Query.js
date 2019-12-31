import Index from '.';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.apis = soter.apis
        this.tronWeb = this.soter.tronWeb

    }

    async userBalance(fromAddress = this.tronWeb.defaultAddress.base58) {

        this.validator.validateAddress(fromAddress)

        let timestamp =  this.apis.dateNow()

        let unSigned = {
            user_address: fromAddress,
            timestamp
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

    async queryUserDepositHistory(options = {}) {

        this.validator.validatorDate(options.start_date)
        this.validator.validatorDate(options.end_date)

        if(options.start_date >= options.end_date)
            throw new Error('End time cannot be less than start time.');

        let timestamp =  this.apis.dateNow()

        const defaultObject = {
            start_date: null,
            end_date: null,
            offset: 0,
            limit: 10
        }

        const raw_data = Object.assign(
            defaultObject, 
            options, 
            {
                type: 0,
                timestamp
            }
        )

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(raw_data)))

        let signData = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data,
            signature
        }
       
        const response = await this.client({
            url: `/api/v1/history`,
            params: signData,
            method: 'get'
        })
        
        return response.data

    }

    async queryUserOrderList(options = {}) {

        this.validator.validatorDate(options.start_date)
        this.validator.validatorDate(options.end_date)

        if(options.start_date >= options.end_date)
            throw new Error('End time cannot be less than start time.');

        let timestamp =  this.apis.dateNow()

        const defaultObject = {
            start_date: null,
            end_date: null,
            offset: 0,
            limit: 10
        }

        const unSigndata = Object.assign(
            defaultObject, 
            options, 
            {
                type: 1,
                timestamp
            }
        )

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(unSigndata)))

        let signData = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data,
            signature
        }
       
        const orderList = await this.client({
            url: `/api/v1/history`,
            params: signData,
            method: 'get'
        })
        
        return orderList.data

    }
    
    async queryUserUploadedFiles(options = {}) {

        this.validator.validatorDate(options.start_date)
        this.validator.validatorDate(options.end_date)

        if(options.start_date >= options.end_date)
            throw new Error('End time cannot be less than start time.');

        let timestamp =  this.apis.dateNow()

        const defaultObject = {
            start_date: null,
            end_date: null,
            offset: 0,
            limit: 10,
            is_deleted: false
        }

        const unSigndata = Object.assign(
            defaultObject, 
            options, 
            {
                timestamp
            }
        )

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(unSigndata)))

        let data = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: unSigndata,
            signature
        }

       

        const response = await this.client({
            url: `/api/v1/files`,
            params: data,
            method: 'get'
        })
        
        return response.data

    }

}