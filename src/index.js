export default class Soter {
    constructor(tronWeb = false) {
        if(!tronWeb){
            throw new Error('Expected instance of TronWeb');
        }

        if (!tronWeb.defaultAddress){
            throw new Error('Expected default account set up in TronWeb');
        }

        this.tronWeb = tronWeb;

    }

    setTronWeb(tronWeb = false) {
        if (!tronWeb)
            throw new Error('Expected instance of TronWeb');
        if (!tronWeb.defaultAddress)
            throw new Error('Expected default account set up in TronWeb');
        this.tronWeb = tronWeb;
        this.defaultAddress = tronWeb.defaultAddress;
        this.defaultAddress = tronWeb.defaultAddress;
    }
}