
let cartQuantity=0;

function cartquantity(){
cartQuantity =cartQuantity+1;
document.querySelector('.cartbutton').innerHTML=cartQuantity;
console.log(`${cartQuantity}`);
}