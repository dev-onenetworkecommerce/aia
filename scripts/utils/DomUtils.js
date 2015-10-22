export function isNodeInRoot(node, root) {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

/**
 * Checks if the given node has the given class
 *
 * @param {DOMElement} node
 * @param {string} className
 * @returns {boolean}
 */
export function hasClass(node, className) {
  return node.className.split(' ').indexOf(className) !== -1;
}

/**
 * @TODO
 * Add array or classes
 *
 * @param {DOMElement}
 * @param {string}
 */
export function addClass(node, className) {
  if ( hasClass(node, className) ) {
    return;
  }

  const classes = node.className.split(' ');
  classes.push(className);
  return (node.className = classes.join(' '));
};

/**
 * @TODO
 * Add array or classes
 *
 * @param {DOMElement}
 * @param {string}
 */
export function removeClass(node, className) {
  // @REFACTOR
  // Do not use hasClass because it doubles
  // the amount of process executed
  if ( !hasClass(node, className) ) {
    return;
  }

  const classes = node.className.split(' ');
  const index = classes.indexOf(className);
  classes.splice(index, 1);
  return (node.className = classes.join(' '));
}
