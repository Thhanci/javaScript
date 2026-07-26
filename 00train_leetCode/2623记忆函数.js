/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache={};
    return function(...args) {
        const key =JSON.stringify(args);

        if(key in cache){
            return cache[key];
        }

        const result = fn(...args);
        cache[key]=result;
        return result;
    };
}


/*


// ============== 测试用例 ==============
//sum
const sum=(a,b)=>a+b;
const memoizedSum=memoize(sum);

console.log(memoizedSum(2,2))
console.log(memoizedSum(2,2))
console.log(memoizedSum(1,2))


console.log("__________________")
//factorial
const factorial=(n) =>(n<=1)?1:n*factorial(n-1);
const memoFactorial=memoize(factorial);

console.log(memoFactorial(2));
console.log(memoFactorial(3));
console.log(memoFactorial(2));
console.log(memoFactorial(3));
console.log(memoize(factorial)(3));//Tip


console.log("__________________")
//fib
const fib=(n)=>(n<=1)?1:fib(n-1)+fib(n-2);
const memoFib=memoize(fib);

console.log(memoFib(0));
console.log(memoFib(1));
console.log(memoFib(2));
console.log(memoFib(3));
console.log(memoFib(4));
console.log(memoFib(5));



console.log("__________________")
//统计调用次数
let callCount=0;
const memoizedFn=memoize(function(a,b){
    callCount+=1;
    return a+b;
});
console.log(memoizedFn(2,3));
console.log(memoizedFn(2,3));
console.log(memoizedFn(3,2));
console.log("callCount: ",callCount);

*/















/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

//function factorial(n) {
//  // 函数体
//}