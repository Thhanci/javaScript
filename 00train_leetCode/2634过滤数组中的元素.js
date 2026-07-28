/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
};


// var filter = function(arr, fn) {
//     const filtered=[];
//     arr.forEach((item,index) => {
//         if(fn(item,index))
//             filtered.push(item)
//     });
//     return filtered;
// };

//测试用例
//1过滤大于10的数
// const arr1=[0,10,20,30];
// const fn1=function greaterThan10(n){return n>10};
// console.log(filter(arr1,fn1));

// 2过滤索引为0的元素
// const arr2=[1,2,3];
// const fn2=function firstIndex(n,i){return i===0};
// console.log(filter(arr2,fn2));

//3假值过滤
// const arr3=[-2,-1,0,1,2];
// const fn3=function plusOne(n){return n+1};
// console.log(filter(arr3,fn3));

//4空数组
// console.log(filter([],()=>true));


