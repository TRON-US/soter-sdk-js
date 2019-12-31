export default class Validator {

    constructor(Soter) {
        this.tronWeb = Soter.tronWeb;
        this.utils = this.tronWeb.utils;
    }

    validateAddress(address) {
        if (!this.tronWeb.isAddress(address))
            throw new Error('Invalid address provided.');
    }

    validatorDate(timestamp) {
        if (new Date(timestamp).getTime() <= 0 )
            throw new Error('Invalid time.');

    }
}