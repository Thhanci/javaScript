/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer=null;

    return function(...args) {
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args)
        },t);
    };
};

//基本防抖
// console.log("_________基本防抖_________");
// const log = debounce(console.log,500);

// log("1st invocation");
// log("2nd invocation");
// log("3rd invocation"); setTimeout(()=>log("3rd"),100);



//带参数
// console.log("________带参数__________");
// const logArgs=debounce((a,b)=>{
//     console.log("parameters:  ",a,b);
// },300)
// logArgs("hello","world");
// logArgs("foo","bar");



//时间戳验证
// console.log("______时间戳验证____________");
// let start=Date.now();
// function logWithTime(...inputs){
//     console.log(Date.now()-start+"ms",inputs);
//     console.log(Date.now()+"ms",inputs);
//     console.log(start+"ms",inputs);
// }

// const dlog=debounce(logWithTime,50);
// setTimeout(()=>dlog(1),50);
// setTimeout(()=>dlog(2),75);




//连续快速调用
// console.log("________连续快速调用__________");
// let count=0;
// const inc = debounce((...input)=>{
//     count++;
//     console.log("count: ",count," ",input);
// },200);

// inc(1);
// inc(2);
// inc(3);
// inc("4string");




/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */




// 防抖（Debounce） 的意思是：当你反复做一件事时，我不立刻反应，而是等你停下来，过一会儿再执行最后一次。

// t = 50ms
// 调用发生在 30ms、60ms、100ms 这三个时间点。
// 意思是：
// 30ms 你说了第一句 → AI 开始计时，等 50ms。
// 60ms 你又说了第二句 → 才过了 30ms，还没到 50ms，AI 把第一次的取消，重新计时。
// 100ms 你又说了第三句 → 才过了 40ms，还没到 50ms，AI 又把第二次取消，重新计时。
// 这次之后没人再说了，AI 等到 100 + 50 = 150ms 执行了第三次的内容。