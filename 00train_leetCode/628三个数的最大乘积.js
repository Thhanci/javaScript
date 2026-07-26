/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    const n=nums.length;

    const case1 =nums[n-1]*nums[n-2]*nums[n-3];
    const case2=nums[0]*nums[1]*nums[n-1];

    return Math.max(case1,case2);
};

// ============== 测试代码 ==============
// console.log(maximumProduct([1, 2, 3]));          // 6
// console.log(maximumProduct([1, 2, 3, 4]));       // 24
// console.log(maximumProduct([-1, -2, -3]));       // -6
// console.log(maximumProduct([-10, -10, 1, 2]));   // 200