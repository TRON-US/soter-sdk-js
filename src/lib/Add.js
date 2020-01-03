import Index from './index';
export default class Add extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    toAddFileRawData(options = {}) {
        let addTimestamp = Date.parse(new Date())
        
        this.validator.validatorDate(options.request_user)
        this.validator.validatorDate(options.signed_user)

        const unSignAddFileRawData = Object.assign(
            options, 
            {
                request_id: this.apis.uuidv4(),
                timestamp: addTimestamp
            }
        )

        return unSignAddFileRawData
    }

    async signAddFile(unSignData, files, addSignature){
        let addFormData = new FormData()
        addFormData.append("raw_data", JSON.stringify(unSignData));
        addFormData.append("file", files);
        addFormData.append("signature", addSignature)

        const addSignResponse = await this.client({
            url: `/api/v1/add`,
            data: addFormData,
            method: 'post'
        })
        
        return addSignResponse.data
    }

    async addFile(files) {
        
        let addTimestamp = Date.parse(new Date())
        let addFormData = new FormData()
        
        let addUnSignData = {
            request_user: this.tronWeb.defaultAddress.base58,
            signed_user: this.tronWeb.defaultAddress.base58,
            request_id: this.apis.uuidv4(),
            timestamp: addTimestamp
        }

        let addSignature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(addUnSignData)))

        addFormData.append("raw_data", JSON.stringify(addUnSignData));
        addFormData.append("file", files);
        addFormData.append("signature", addSignature)

        const addResponse = await this.client({
            url: `/api/v1/add`,
            data: addFormData,
            method: 'post'
        })
        
        return addResponse.data
    }

 
}