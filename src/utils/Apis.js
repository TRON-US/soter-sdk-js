const _ = require("lodash");
export default class Apis {

    constructor(Soter) {
        this.tronWeb = Soter.tronWeb;
        this.utils = this.tronWeb.utils;
    }

    dateNow() {
        return Date.parse(new Date())
    };

    toTrx(amount) {
        return parseFloat(amount) / 10e5;
    }

    fromTrx(amount) {
        return amount * 10e5;
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
};