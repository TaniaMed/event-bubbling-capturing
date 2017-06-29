'use strict';

function clickProduct(productNode) {
    productNode.addEventListener('click', function(event) {
        addToCart({
                    title : event.target.getAttribute('data-title'),
                    price: event.target.getAttribute('data-price')
                  }) 
        event.preventDefault();
    });
}

Array
    .from(document.getElementsByClassName('add-to-cart'))
    .forEach(clickProduct);
        
