import Index from './Index';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }

    async userBalance() {
        let timestamp = Date.parse( new Date())/1000;
        
        let data = {
            user_address:  this.tronWeb.defaultAddress.base58,
            timestamp: timestamp
        }

        let signature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(data)));

        let rawdata = {
            user_address: this.tronWeb.defaultAddress.base58,
            raw_data: data,
            signature: signature
        }
       
        try {
            const response = await this.axios({
                url: `http://localhost:30002/api/v1/balance`,
                method: 'get'
            });
            console.log(response);
            return response.data

          } catch (error) {
            console.error(error);
          }
       
    }

    async queryUserDepositHistory() {

    }

    async queryUserOrderList() {

    }

    async queryUserUploadedFiles() {

    }

}