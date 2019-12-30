const client = require('../utils/httpquest');
import Soter from '../index';
import Validator from '../utils/validator';
import Apis from '../utils/Apis';

// axios.defaults.headers['Content-Type'] = 'application/json';
// axios.defauls.baseURL = 'http://65.52.163.204:8101'
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