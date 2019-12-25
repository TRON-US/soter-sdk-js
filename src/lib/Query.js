import Index from './Index';
import utils from 'utils';

export default class Query extends Index {

    constructor(soter) {
        super(soter);
    }

    async userBalance() {

        this.validator.validateNumber({ n: 'addedVotes', v: addedVotes}, '>=', 0);
        if (srAddress)
            this.validator.validateAddress(srAddress);
            let isMainNet = this.tronWeb.fullNode.host === 'https://api.trongrid.io';
            srAddress = this.tronWeb.address.toHex(srAddress);

    }

}