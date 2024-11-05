
import { cloneDeep } from "lodash-es";
const arr = [];

const state = {
    cart:[
        {
            product: 'bread', quantity: 5,
        }
    ],
    user: {loggedIn: true}
}

const cloneState = cloneDeep(state);
console.log(cloneState);

console.log("haha");
console.log("haha");

arr.push(1);
console.log(arr);

console.log("Test");

//Importing module
'use strict';

// import './shoppingCart.js';
// import { shippingCost, totalprice } from './shoppingCart.js';
// import {
//   totalQuantity,
//   totalprice as price,
// } from './shoppingCart.js';

// console.log('Importing Module');
// console.log(shippingCost);
// addToCart('bread', 5);

import * as shoppingCart from './shoppingCart.js';


