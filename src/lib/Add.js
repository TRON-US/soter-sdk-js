import Index from './Index';

export default class Add extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    async addFile() {
        let timestamp = Date.parse(new Date())
        let data = {
           
        }
        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(data)))

        let rawdata = {
         
        }

        const response = await this.client({
            url: `/api/v1/autopay`,
            data: rawdata,
            method: 'post'
        })
        
        return response.data
    }

 
}