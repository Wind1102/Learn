console.log("Exporting Module");

const shippingCost = 10;
const cart = [];
const totalprice = 5;
const totalQuantity = 100;

const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

export { shippingCost , totalprice, totalQuantity };

export default addToCart;