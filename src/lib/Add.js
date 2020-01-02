import Index from './index';
export default class Add extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
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