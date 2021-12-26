// make the show the cart content 
const cart = document.querySelector('.cart');
const cart_container = document.querySelector('.cart-container');

cart.addEventListener('click', function () {
    
    cart_container.classList.toggle('show');
});


// change the image in the hero section
const carouselImage = document.querySelector('#carouselImage');
const carouselItem = document.querySelectorAll('.carouselItem');

carouselItem.forEach()