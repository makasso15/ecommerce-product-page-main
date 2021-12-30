// Show the cart content
const cart = document.querySelector('.cart');
const cart_container = document.querySelector('.cart-container');

cart.addEventListener('click', function () {
    cart_container.classList.toggle('show');
});

// Change the image in the hero section and the image in the cart box
let carouselImage = document.getElementById('carouselImage');
let carouselItem = document.querySelectorAll('.carouselItem');
let cartItemImg = document.querySelector('.cart-item-img');

for (let i = 0; i < carouselItem.length; i++) {
    carouselItem[i].onclick = function () {
        carouselImage.src = carouselItem[i].src;
        cartItemImg.src = carouselItem[i].src;
        carouselItem[i].parentElement.classList.add('active');
        carouselItem[i].classList.add('active');
        if (carouselImage.src == carouselItem[i].src) {
            for (let j = 0; j < carouselItem.length; j++) {
                if (j != i) {
                    carouselItem[j].parentElement.classList.remove('active');
                    carouselItem[j].classList.remove('active');
                }
            }
        }
    }
}

// increment/decrement the cart item number and price

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const remove = document.getElementById('remove');
let selected = document.querySelector('.selected');
let cartItemNumber = document.querySelectorAll('.cartItemNumber');
let currentPrice = document.getElementById('currentPrice');

// if no item in the cart call the clear the cart 

if (selected.innerText == 0) {
    clearCart();
}

// update the cart item price
function updatePrice() {
    currentPrice.innerText = parseInt(selected.innerText) * 125;
}

// update the cart item number
function updateCartItem() {
    cartItemNumber.forEach(item => {
        item.innerText = selected.innerText;
    });
}

// clear the cart 
function clearCart() {
    let empty = document.querySelector('.empty');
    empty.style.display = "block";
    empty.innerText = "Your cart is empty";
    document.querySelector('.cart-item').style.display = "none";
    document.querySelector('.checkout').style.display = "none";
    selected.innerText = 0;
    updateCartItem();
    updatePrice();

}

// feed cart
function feedCart() {
    document.querySelector('.empty').style.display = "none";
    document.querySelector('.cart-item').style.display = null;
    document.querySelector('.checkout').style.display = null;
}

// increment function
function increment (event) {
    event.preventDefault();
    feedCart();
    selected.innerText = parseInt(selected.innerText) + 1
    updateCartItem();
    updatePrice();
}

// decrement function
function decrement(event) {
    event.preventDefault();
    selected.innerText = parseInt(selected.innerText) - 1;
    updateCartItem();
    updatePrice();
    if (selected.innerText < 0 || selected.innerText == 0) {
        clearCart();
    }
}

// call the increment and the decrement the number of items in the cart
plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);

// delete all items in the cart by clicking the trash btn 
remove.addEventListener('click', clearCart);


