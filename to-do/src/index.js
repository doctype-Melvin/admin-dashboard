import './style.css'
import {funcs} from './func'

//Method to set obj in local storage
Storage.prototype.setObj = function(key, value){
    this.setItem(key, JSON.stringify(value));
}
//Method to get obj from local storage
Storage.prototype.getObj = function(key){
    let value = this.getItem(key);
    return value && JSON.parse(value);
}

