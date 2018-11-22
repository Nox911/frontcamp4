if (
    typeof NodeList.prototype.forEach !== 'function' &&
    typeof Array.prototype.forEach === 'function'
)
    NodeList.prototype.forEach = Array.prototype.forEach;
