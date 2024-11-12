
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

import addToCart, * as shoppingCart from './shoppingCart.js';

const res = await fetch('https://jsonplaceholder.typicode.com/posts');

const data = await res.json();

console.log(data);

const shippingCost = (function () {
  const cart = [];
  const shipper = 10;

  const addToCart = function (product, price) {
    cart.push(price);
    console.log(`${product} have cost is ${price} `);
  };

  return {
    cart,
    shipper,
    addToCart,
  };
})();

shippingCost.addToCart('KL', 10);

console.log(shippingCost);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

const state = {
  cart: [
    { product: 'Pizza', quantity: 5 },
    { product: 'Bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
// console.log(stateClone);
// state.user.loggedIn = false;
// console.log(stateClone);

const stateClone = cloneDeep(state);
console.log(stateClone);