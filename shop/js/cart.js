'use strict';
/*
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
    
*/    


const itemsList = document.querySelector('.items-list');
itemsList.addEventListener('click', clickItemsList);

function clickItemsList(event) {
    Array
    .from(document.getElementsByClassName('add-to-cart'))
    .forEach(function(cart) {
        if (cart === event.target) {
            addToCart({
                    title : event.target.getAttribute('data-title'),
                    price: event.target.getAttribute('data-price')
                  }) 
            event.preventDefault();
        }
    });  
}