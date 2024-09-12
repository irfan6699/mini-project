const cart = document.querySelectorAll('.addtocart');  // Select all elements with class 'add'
const add = document.querySelector('.add');  // Assuming this is an input to show count
let count = 0;

cart.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent=="ADD"){
        button.textContent = "Added";  // Change the button text to 'Added'
        count++;
        add.innerHTML= count;  // Update the input with the new count value
        }
        else{
            button.textContent="ADD";
            if(count>=0){
                count--;
            add.innerHTML=count;
            }
        }
    });
});
const home=document.querySelector(`.home`);
home.addEventListener("click",function(){
    window.location.href="index.html";
});
const cartpg=document.querySelector(`.cart`);
cartpg.addEventListener("click",function(){
    cartpage(count);
});
function cartpage(count){
    if(count===0){
        alert("there is nothing in the cart");
    }
    else{
        window.location.href="cart.html";
    }
};
