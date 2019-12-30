export default class Validator {

    constructor(Soter) {
        this.tronWeb = Soter.tronWeb;
        this.utils = this.tronWeb.utils;
    }

    validateAddress(address) {
        if (!this.tronWeb.isAddress(address))
            throw new Error('Invalid address provided.');
    }
}