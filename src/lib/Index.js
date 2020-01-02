const client = require('../utils/httpquest');
import Soter from '../index';
import Validator from '../utils/validator';
import Apis from '../utils/apis';

export default class Index {

    constructor(soter) {
        if (!soter || !(soter instanceof Soter))
            throw new Error('Expected instance of TronStation');
        this.client = client;

        this.soter = soter;
        this.tronWeb = soter.tronWeb;
        this.apis = new Apis(this.soter);
        this.validator = new Validator(this.soter);
    }

}