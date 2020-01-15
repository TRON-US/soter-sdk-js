import Index from './index';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.apis = soter.apis
        this.tronWeb = this.soter.tronWeb

    }

    userSignBalanceRawData(fromAddress) {
        this.validator.validateAddress(fromAddress)

        let timestamp =  this.apis.dateNow()

        let unSigned = {
            user_address: fromAddress,
            timestamp
        }

        return unSigned
    }

    async userSignBalance(fromAddress, rawData, signature) {
        this.validator.validateAddress(fromAddress)

        let signOptions = {
            user_address: fromAddress,
            raw_data: rawData,
            signature: signature
        }

        const signResponse = await this.client({
            url: `/api/v1/balance`,
            params: signOptions,
            method: 'get'
        })

        return signResponse.data
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

    signDepositHistoryRawData(options = {}) {

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

        let historyRawdata = Object.assign(
            defaultObject, 
            options, 
            {
                type: 0,
                timestamp
            }
        )

        return historyRawdata
    }

    async signDepositHistory(fromAddress, rawData, signature) {
        this.validator.validateAddress(fromAddress)

        let signOptions = {
            user_address: fromAddress,
            raw_data: rawData,
            signature: signature
        }

        const signHistory = await this.client({
            url: `/api/v1/history`,
            params: signOptions,
            method: 'get'
        })
        
        return signHistory.data
    }

    async depositHistory(options = {}) {

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

        let historyRawdata = Object.assign(
            defaultObject, 
            options, 
            {
                type: 0,
                timestamp
            }
        )

        let historySignature = await this.tronWeb.trx.sign(this.tronWeb.toHex(JSON.stringify(historyRawdata)))

        let signData = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: historyRawdata,
            signature: historySignature
        }
       
        const response = await this.client({
            url: `/api/v1/history`,
            params: signData,
            method: 'get'
        })
        
        return response.data

    }

    userSignOrderListRawData(options = {}) {
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

        let orderListRawdata = Object.assign(
            defaultObject, 
            options, 
            {
                type: 1,
                timestamp
            }
        )

        return orderListRawdata
    }

    async userSignOrderList(fromAddress, rawData, signature) {
        this.validator.validateAddress(fromAddress)

        let signOptions = {
            user_address: fromAddress,
            raw_data: rawData,
            signature: signature
        }

        const signOrderList = await this.client({
            url: `/api/v1/history`,
            params: signOptions,
            method: 'get'
        })
        
        return signOrderList.data
    }

    async userOrderList(options = {}) {

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

        let listSignature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(unSigndata)))

        let signData = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: unSigndata,
            signature: listSignature
        }
       
        const orderList = await this.client({
            url: `/api/v1/history`,
            params: signData,
            method: 'get'
        })
        
        return orderList.data

    }
    
    userSignUploadedRawData(options={}){
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

        const unSignUploadedFiles = Object.assign(
            defaultObject, 
            options, 
            {
                timestamp
            }
        )

        return unSignUploadedFiles
    }

    async userSignUploaded(fromAddress, rawData, signature) {
        this.validator.validateAddress(fromAddress)

        let signUploadedData = {
            user_address: fromAddress,
            raw_data: rawData,
            signature: signature
        }

        const uploadedFilesList = await this.client({
            url: `/api/v1/files`,
            params: signUploadedData,
            method: 'get'
        })
        
        return uploadedFilesList.data
    }

    async userUploaded(options = {}) {

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

        let fileSignature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(unSigndata)))

        let data = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: unSigndata,
            signature: fileSignature
        }

       

        const response = await this.client({
            url: `/api/v1/files`,
            params: data,
            method: 'get'
        })
        
        return response.data

    }

}