/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result=[];
    arr.forEach((item,index)=>{
        result.push(fn(item,index));
    });
    return result;
};

//测试用例
//1 加1
// const arr1=[1,2,3]
// const fn1=function plusone(n){return n+1};
// const fnone=()=>n+1
// console.log(map(arr1,fn1));

//2 加索引
// const arr2=[1,2,3];
// const fn2=function plusI(item,index){return item+index}
// console.log(map(arr2,fn2));

//3 恒等函数
// const arr3=[10,20,30];
// const fn3=function constant(){return 42;}
// console.log(map(arr3,fn3));

//空数组
// console.log(map([],(n)=>n*2));