// make the show the cart content 
const cart = document.querySelector('.cart');
const cart_container = document.querySelector('.cart-container');

cart.addEventListener('click', function () {
    
    cart_container.classList.toggle('show');
});

// change the image in the hero section
var carouselImage = document.querySelector('#carouselImage');
var carouselItem = document.querySelectorAll('.carouselItem');


carouselItem.forEach(image => {
    image.addEventListener('click', function(event) {
        if (document.querySelectorAll('.active .carouselItem').length == 1) {
            image.parentElement.classList.remove('active');
            image.classList.remove('active');
        } else {
            image.parentElement.classList.add('active');
            image.classList.add('active');
        }
        carouselImage.src = image.src;
    })
})