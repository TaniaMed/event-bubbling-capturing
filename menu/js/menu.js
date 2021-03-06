'use strict';

function toggleMenu(event) {
  if (this.classList.contains('show')) {
    this.classList.remove('show');
    this.classList.add('hide');
  } else {
    this.classList.add('show');
    this.classList.remove('hide');
  }
}

function openLink(event) {
  console.log(this.textContent);
}

function init(node) {
  node.addEventListener('click', toggleMenu);
}

function initLink(node) {
  if (node.dataset.toggle) {
    return;
  }
  node.addEventListener('click', openLink);
}

function transition(node) {
    node.removeEventListener('click', initLink);
    node.addEventListener('click', function(event) {
      event.stopPropagation(); 
      event.preventDefault();
    });
}

Array
  .from(document.querySelectorAll('.dropdown'))
  .forEach(init);

Array
  .from(document.querySelectorAll('a'))
  .forEach(initLink);

Array
  .from(document.querySelectorAll('.dropdown-menu'))
  .forEach(transition);
  