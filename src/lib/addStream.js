import Index from './index';
import axios from 'axios';
import NodeFormData from 'form-data';
import stream from 'stream';


export default class addStream extends Index {

    constructor(soter) {
        super(soter);
        this.soter = soter
        this.tronWeb = this.soter.tronWeb
    }
    
    async addStreamFile(files) {

        let addTimestamp = Date.parse(new Date())
        const data = new NodeFormData();
        const url = `https://sandbox.btfssoter.io/api/v1/add`;

        if (!(files instanceof stream.Readable)) {
            reject(new Error('readStream is not a readable stream'));
        }

        let addUnSignData = {
            request_user: this.tronWeb.defaultAddress.base58,
            signed_user: this.tronWeb.defaultAddress.base58,
            request_id: this.apis.uuidv4(),
            timestamp: addTimestamp
        }

        let addSignature = await this.tronWeb.trx.sign( this.tronWeb.toHex(JSON.stringify(addUnSignData)))
       
        data.append('raw_data', JSON.stringify(addUnSignData));
        data.append('file', files);
        data.append("signature", addSignature);

        const addStream = await axios.post(
            url,
            data,
            {
                withCredentials: true,
                maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
                headers: {
                    'Content-type': `multipart/form-data; boundary= ${data._boundary}`
                }
            }
        )

       return addStream.data
    }
 
}