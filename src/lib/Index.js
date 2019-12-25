import Soter from '../index';
import Validator from '../utils/Validator';
import Apis from '../utils/Apis';

export default class Index {

    constructor(soter) {
        if (!soter || !(soter instanceof Soter))
            throw new Error('Expected instance of TronStation');

        this.soter = soter;
        this.tronWeb = soter.tronWeb;
        this.apis = new Apis(this.soter);
        this.validator = new Validator(this.soter);
    }

}