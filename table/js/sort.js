'use strict';

function handleTableClick(event) {
    if (event.target.hasAttribute('data-prop-name')){
        let direction = event.target.getAttribute('data-dir') == 1 ? -1 : 1;   let field = event.target.getAttribute('data-prop-name');
        event.target.setAttribute('data-dir', direction);
        event.target.setAttribute('data-sort-by', field);
        sortTable(field, direction);
    }
    event.stopPropagation();
}

function handleNode(node) {
    node.addEventListener('click', handleTableClick);
}

Array
  .from(document.querySelectorAll('th'))
  .forEach(handleNode);
