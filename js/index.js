// Show the cart content
const cart = document.querySelector('.cart');
const cart_container = document.querySelector('.cart-container');

cart.addEventListener('click', function () {
    cart_container.classList.toggle('show');
});

// Change the image in the hero section and the image in the cart box
const carouselImage = document.querySelector('#carouselImage');
let cartItemImg = document.querySelector('.cart-item-img');
let carouselItem = document.querySelectorAll('.carouselItem');

for (let i = 0; i < carouselItem.length; i++) {
    carouselItem[i].onclick = function () {
        carouselImage.src = carouselItem[i].src;
        cartItemImg.src = carouselItem[i].src;
        carouselItem[i].parentElement.classList.add('active');
        carouselItem[i].classList.add('active');
        if (carouselImage.src == carouselItem[i].src) {
            for (let index = 0; index < carouselItem.length; index++) {
                if (index != i) {
                    carouselItem[index].parentElement.classList.remove('active');
                    carouselItem[index].classList.remove('active');
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

// update the cart item price
function updatePrice() {
    currentPrice.innerHTML = parseInt(selected.innerHTML) * 125;
}

// update the cart item number
function updateCartItem() {
    cartItemNumber.forEach(item => {
        item.innerHTML = selected.innerHTML;
    });
}

// clear the cart 
function clearCart() {
    let empty = document.querySelector('.empty');
    empty.style.display = "block";
    empty.innerHTML = "Your cart is empty";
    document.querySelector('.cart-item').style.display = "none";
    document.querySelector('.checkout').style.display = "none";
    selected.innerHTML = 0;
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
const increment = (event) => {
    event.preventDefault();
    feedCart();
    selected.innerHTML = parseInt(selected.innerHTML) + 1
    updateCartItem();
    updatePrice();
}

// decrement function
const decrement = (event) => {
    event.preventDefault();
    selected.innerHTML = parseInt(selected.innerHTML) - 1;
    updateCartItem();
    updatePrice();
    if (selected.innerHTML < 0 || selected.innerHTML == 0) {
        clearCart();
    }
}
// delete all items by clicking the trash btn 
remove.addEventListener('click', (event) => {
    event.preventDefault();
    let empty = document.querySelector('.empty');
    empty.style.display = "block";
    empty.innerHTML = "Your cart is empty";
    document.querySelector('.cart-item').style.display = "none";
    document.querySelector('.checkout').style.display = "none";
    selected.innerHTML = 0;
    updateCartItem();
    updatePrice();
});
plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);

