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