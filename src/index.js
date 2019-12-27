import Query from 'lib/Query'
import Set from 'lib/Set'
import Add from 'lib/Add'
import Apis from 'utils/Apis';
export default class Soter {
    constructor(tronWeb = false) {
        if(!tronWeb){
            throw new Error('Expected instance of TronWeb');
        }

        if (!tronWeb.defaultAddress){
            throw new Error('Expected default account set up in TronWeb');
        }

        this.tronWeb = tronWeb;
        this.apis = new Apis(this);
        this.query = new Query(this);
        this.set = new Set(this);
        this.add = new Add(this);
    }

    setTronWeb(tronWeb = false) {
        if (!tronWeb)
            throw new Error('Expected instance of TronWeb');
        if (!tronWeb.defaultAddress)
            throw new Error('Expected default account set up in TronWeb');
        this.tronWeb = tronWeb;
        this.defaultAddress = tronWeb.defaultAddress;
        this.apis = new Apis(this);
        this.query = new Query(this);
        this.set = new Set(this);
        this.add = new Add(this);
    }
}