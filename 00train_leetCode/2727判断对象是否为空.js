/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (obj == null) return false;
    return Object.keys(obj).length === 0;
};
// console.log(isEmpty({}));
// console.log(isEmpty(null));
// console.log(isEmpty(undefined));

// return JSON.stringify(obj)==='{}'||JSON.stringify(obj)==='[]';


// forEach 是数组的遍历方法，比 for 更简洁，但不能用 break/continue/await；需要提前退出或异步操作用 for。