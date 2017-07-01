import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import {Network} from './helpers/Network';

// let net = new Network();
// net.getProducts();
// import {Axios} from 'axios';
// Axios.get('https://challenge.thimoo.ch/api/products').then(function (response) {
//             console.log(response);
//         }).catch(function (error) {
//             console.log(error);
//         });
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
