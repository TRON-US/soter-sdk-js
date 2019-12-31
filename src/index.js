import Query from 'lib/query'
import Add from 'lib/add'
import Set from 'lib/set'
import Update from 'lib/update'
import Apis from 'utils/apis';
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
        this.add = new Add(this);
        this.set = new Set(this);
        this.query = new Query(this)
        this.add = new Add(this);
        this.update = new Update(this);
    }

    setTronWeb(tronWeb = false) {
        if (!tronWeb)
            throw new Error('Expected instance of TronWeb');
        if (!tronWeb.defaultAddress)
            throw new Error('Expected default account set up in TronWeb');
        this.tronWeb = tronWeb;
        this.defaultAddress = tronWeb.defaultAddress;
        this.apis = new Apis(this);
        this.add = new Add(this);
        this.set = new Set(this);
        this.query = new Query(this)
        this.add = new Add(this);
        this.update = new Update(this);
    }
}