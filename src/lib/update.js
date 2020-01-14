import Index from './index';

export default class Update extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    userSignInformationRawData(options = {}){
        let timestamp =  this.apis.dateNow()

        const unSignInforData = Object.assign(
            options, 
            {
                timestamp
            }
        )

        return unSignInforData

    }

    async userSignInformation(fromAddress, rawdata, signature) {
        let SignInforawdata = {
            user_address: fromAddress,
            raw_data: rawdata,
            signature: signature
        }

        const signInfoResponse = await this.client({
            url: `/api/v1/edit_profile`,
            data: SignInforawdata,
            method: 'post'
        })
        
        return signInfoResponse.data
    }
    
    async userInformation(options = {}) {
       
        let timestamp =  this.apis.dateNow()

        const unSigndata = Object.assign(
            options, 
            {
                timestamp
            }
        )

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(unSigndata)))

        let rawdata = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: unSigndata,
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