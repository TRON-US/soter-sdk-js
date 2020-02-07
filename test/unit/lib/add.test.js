const {assert, soterBuilder, net } = require('../../helpers/includes')
const TronWeb = require('tronweb');

const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

describe('#Add unit test', function () {

    let soter;

    before(async function () {
        this.timeout(10000)
        soter = soterBuilder.createInstance(net)
    });

    after(async function () {
        this.timeout(10000)
    });

    // balance
    describe('#Add', function () {
        this.timeout(10000)

        it('addFile', async function () {
            const newTronWeb = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                privateKey: '07843e997dfe76f655274e14ea688ca1ba08550b93147fc0feca4ba7174868a7'
            });
     
            
        let files = fs.readFileSync(path.join(__dirname, '1.txt'),'utf-8');
        let addTimestamp = Date.parse(new Date())
     
        let addUnSignData = {
            request_user: newTronWeb.defaultAddress.base58,
            signed_user: newTronWeb.defaultAddress.base58,
            request_id: "0b02aa3b-e3a3-489b-9ecf-40607c153b6c",
            timestamp: addTimestamp
        }


        let addSignature = await newTronWeb.trx.sign(newTronWeb.toHex(JSON.stringify(addUnSignData)))

        let addFormData = new FormData();
        addFormData.append("raw_data", JSON.stringify(addUnSignData));
        addFormData.append("file", files);
        addFormData.append("signature", addSignature)
        // const axiosInstance = axios.create({
        //     baseURL: 'http://65.52.163.204:8101/',
        //     /* other custom settings */
        //   });
          try{
            const addSignResponse = axios({
                url: `https://sandbox.btfssoter.io/api/v1/add`,
                data: addFormData,
                method: 'post'
              })
              console.log(addSignResponse)
          }catch(err){
            console.log(err)
          }
         

        
        // let res = await soter.add.addFile(files)
            // assert.equal(res.code, 0)
        });



    });


})