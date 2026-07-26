// 题目：实现节流函数（Throttle）
// 题目描述

// 请你实现一个 throttle 函数。

// 节流函数接收一个函数 fn 和时间间隔 t（毫秒），返回一个新的函数。

// 返回的新函数满足：

// 第一次调用时立即执行 fn
// 在接下来的 t 毫秒内，无论调用多少次，都不会再次执行
// 当距离上一次执行超过 t 毫秒后，下一次调用可以再次执行
// 需要正确传递参数
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var throttle = function(fn, t) {
    let lastTime = 0;
    
    return function(...args) {
        const now = Date.now();
        if(now - lastTime >= t){
            lastTime = now;
            fn(...args);
        }
    };
};


// ============== 测试用例 ==============

// 基础节流

// console.log("_________基本节流_________");
// const log = throttle(console.log,500);

// log("1st invocation");
// setTimeout(()=>{
//     log("2nd invocation");
// },100);
// setTimeout(()=>{
//     log("3rd invocation");
// },300);
// setTimeout(()=>{
//     log("4th invocation");
// },600);


// console.log("_________带参数_______________");
// const logArgs = throttle((a,b)=>{
//     console.log("parameters:",a,b);
// },300);

// logArgs("hello","world");
// setTimeout(()=>{
//     logArgs("foo","bar");
// },100);
// setTimeout(()=>{
//     logArgs("A","B");
// },400);



// console.log("__________时间戳验证______________");
// let start = Date.now();
// function logWithTime(...inputs){
//     console.log(
//         Date.now() - start + "ms",
//         inputs
//     );
// }
// const tlog = throttle(logWithTime,100);

// setTimeout(()=>{
//     tlog(1);
// },20);
// setTimeout(()=>{
//     tlog(2);
// },50);
// setTimeout(()=>{
//     tlog(3);
// },120);



// console.log("_________连续快速调用________________");
// let count = 0;
// const inc = throttle((...input)=>{
//     count++;
//     console.log(
//         "count:",
//         count,
//         input
//     );
// },200);

// inc(1);
// inc(2);
// inc(3);
// inc("4string");
// setTimeout(()=>{
//     inc(5);
// },300);


console.log("________________________");
let callCount = 0;
const throttledFn = throttle(()=>{
    callCount++;
},500);

throttledFn();
throttledFn();
throttledFn();
setTimeout(()=>{
    throttledFn();
    console.log("callCount:",callCount);
},600);


/*
 * ============================================================
 * 节流（Throttle）笔记
 * ============================================================
 * 
 * 一、节流是什么？
 *    限制函数在指定时间（t 毫秒）内最多执行一次。
 *    第一次调用立即执行，之后按固定频率执行。
 * 
 *    生活类比：限流闸门（不管上游来多少水，每隔固定时间放一次）
 * 
 * 二、执行过程示例
 *    t = 1000ms（1秒）
 * 
 *    0ms     log("A")   ← 第一次调用 → 立即执行 ✅
 *    200ms   log("B")   ← 距离上次 200ms < 1000ms → 忽略 ❌
 *    500ms   log("C")   ← 距离上次 500ms < 1000ms → 忽略 ❌
 *    1200ms  log("D")   ← 距离上次 1200ms ≥ 1000ms → 执行 ✅
 * 
 *    最终输出：A、D
 * 
 * 三、核心代码
 *    var throttle = function(fn, t) {
 *        let lastTime = 0;        // 上次执行时间
 *        let timer = null;        // 定时器
 *        let pendingArgs = null;  // 等待执行的参数
 * 
 *        return function(...args) {
 *            const now = Date.now();
 * 
 *            // 检查是否超过限制时间
 *            if (now - lastTime >= t) {
 *                // 情况1：超过 t 毫秒 → 立即执行
 *                if (timer !== null) {
 *                    clearTimeout(timer);
 *                    timer = null;
 *                }
 *                fn(...args);
 *                lastTime = now;
 *                pendingArgs = null;
 *                return;
 *            }
 * 
 *            // 情况2：在节流周期内 → 存储最新参数，延迟执行
 *            pendingArgs = args;
 *            if (timer === null) {
 *                const remaining = t - (now - lastTime);
 *                timer = setTimeout(() => {
 *                    if (pendingArgs !== null) {
 *                        fn(...pendingArgs);
 *                        lastTime = Date.now();
 *                        pendingArgs = null;
 *                    }
 *                    timer = null;
 *                }, remaining);
 *            }
 *        };
 *    };
 * 
 * 四、节流 vs 防抖
 * 
 *    ┌─────────────┬──────────────────────┬──────────────────────┐
 *    │             │      节流             │      防抖            │
 *    ├─────────────┼──────────────────────┼──────────────────────┤
 *    │ 核心特点    │ 限制执行频率          │ 延迟执行             │
 *    │ 执行时机    │ 第一次立即执行        │ 最后一次延迟执行      │
 *    │ 执行次数    │ 按固定频率执行多次    │ 只执行最后一次        │
 *    │ 生活类比    │ 限流闸门              │ 电梯关门             │
 *    │ 适用场景    │ 滚动事件、鼠标移动    │ 搜索框输入、窗口resize│
 *    └─────────────┴──────────────────────┴──────────────────────┘
 * 
 * 五、记忆口诀
 *    防抖等你停，节流限速度。
 *    搜索用防抖，滚动用节流。
 * 
 * ============================================================
 */ 










/*
2676. 节流（Throttle）
中等 · 相关企业 · 提示

请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的函数节流 后的结果。

函数节流 方法是一个函数，它会被限制在每 t 毫秒内最多执行一次。在节流周期内，它应该存储最新的参数，并在延迟结束后使用这些参数执行一次。

例如，假设 t = 50ms ，函数在 0ms、30ms、60ms、90ms 时调用。前两次调用（0ms 和 30ms）应被合并为一次在 0ms 执行，第三次调用（60ms）应在 60ms 执行，第四次调用（90ms）应在 100ms 执行（因为 50ms 的间隔从 60ms 开始计算，到 110ms 才结束，但 90ms 的调用使延迟执行提前到 100ms）。

请在不使用 lodash 的 _.throttle() 函数的前提下解决该问题。

提示：

0 <= t <= 1000
1 <= calls.length <= 10
0 <= calls[i].t <= 1000
0 <= calls[i].inputs.length <= 10
*/


// /**
//  * @param {Function} fn
//  * @param {number} t
//  * @return {Function}
//  */
// var throttle =function(fn,t){
//     let timer = null;          // 定时器
//     let lastTime = 0;          // 上次执行时间
//     let pendingArgs = null;    // 等待执行的参数

//     return function(...args){
//         const now=Date.now();
//         const remaining=t-(now-lastTime);
    
    
//         if(remaining<=0){// 如果已经过了间隔时间，立即执行
//             if(timer!==0){
//                 clearTimeout(timer);
//                 timer=null;
//             }
//             fn(...args);
//             lastTime=now;
//             pendingArgs=null;
//             return;
//         }

//         pendingArgs=args;// 在节流周期内，存储最新参数

//         if(timer===null){   // 如果没有定时器，设置一个
//             timer=setTimeout(()=>{
//                 if(pendingArgs!==null){
//                     fn(...pendingArgs);
//                     lastTime=Date.now()
//                     pendingArgs=null;
//                 }
//                 timer=null;
//             },remaining);
//         }


//     };
// }



    // 节流（Throttle）的核心思想是：函数在规定时间（t）内最多只执行一次，多余的调用会被忽略或合并。
    // 想象一下你洗手时，水龙头的限流器：
    //     不管你怎么拧水龙头，水都是一滴一滴按固定频率流出来，不会一下子喷涌而出。
    //     节流函数就像这个限流器：不管你调用多少次，它都按固定时间间隔执行。




    // 防抖（Debounce）	节流（Throttle）
    // 只执行最后一次	按固定频率执行
    // 等用户停下来了再做	每隔一段时间做一次
    // 搜索框输入	滚动事件、鼠标移动
    // 电梯关门	限流闸门