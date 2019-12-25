export default class Validator {

    constructor(tronStation) {
        this.tronWeb = tronStation.tronWeb;
        this.utils = this.tronWeb.utils;
    }

    validateAddress(address) {
        if (!this.tronWeb.isAddress(address))
            throw new Error('Invalid address provided.');
    }
};