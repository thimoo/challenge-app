/**
 * Created by sa7bi on 01.07.17.
 */

import {Axios} from 'axios';

export class Network {

    constructor(url='https://challenge.thimoo.ch/api/'){
        this.url = url;
    }

    getProducts(){
        console.info(this.url+'products')
        Axios.get(this.url+'products').then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}
