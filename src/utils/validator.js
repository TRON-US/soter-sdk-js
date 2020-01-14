export default class Validator {

    constructor(Soter) {
        this.tronWeb = Soter.tronWeb;
    }

    validateAddress(address) {
        if (!this.tronWeb.isAddress(address)){
            throw new Error('Invalid address provided.');
        }
    }

    validatorDate(timestamp) {
        let nowTime = new Date(timestamp).getTime()
        if ( nowTime <= 0 ){
            throw new Error('Invalid time.');
        }
    }
}