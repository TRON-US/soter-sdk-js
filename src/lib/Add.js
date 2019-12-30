import Index from './index';
export default class Add extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    async addFile(files) {
        let timestamp = Date.parse(new Date())
        let formData = new FormData()
        let data = {
            request_user: this.tronWeb.defaultAddress.base58,
            signed_user: this.tronWeb.defaultAddress.base58,
            request_id: this.apis.uuidv4(),
            timestamp
        }

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(data)))

        formData.append("raw_data", JSON.stringify(data));
        formData.append("file", files);
        formData.append("signature", signature)

       
        const response = await this.client({
            url: `/api/v1/add`,
            data: formData,
            method: 'post'
        })
        
        return response.data
    }

 
}