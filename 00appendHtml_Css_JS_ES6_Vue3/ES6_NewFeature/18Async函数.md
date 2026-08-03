# Promise 是什么？

**Promise** 是 JavaScript 中用来**处理异步操作**的对象，它代表一个**未来才会完成（或失败）**的操作。

---

## 通俗理解

> Promise 就像一张**"欠条"**。
> 
> - 你向朋友借钱，朋友给你一张欠条（Promise），承诺**将来**还你
> - 欠条有两种结果：**兑现**（成功）或**不兑现**（失败）
> - 在这之前，你拿着欠条可以做其他事（不阻塞）

---

## Promise 的三种状态

| 状态 | 含义 | 比喻 |
|------|------|------|
| **pending（等待中）** | 操作还没完成 | 欠条还没到期 |
| **fulfilled（已成功）** | 操作成功完成 | 朋友还钱了 ✅ |
| **rejected（已失败）** | 操作失败了 | 朋友不还钱 ❌ |

---

## 基本用法

```javascript
// 1. 创建 Promise
const promise = new Promise(function(resolve, reject) {
    // 做异步操作（比如网络请求、定时器）
    setTimeout(function() {
        const success = true;
        if (success) {
            resolve("成功的数据");  // 成功了 → 调用 resolve
        } else {
            reject("失败的信息");   // 失败了 → 调用 reject
        }
    }, 1000);
});

// 2. 使用 Promise
promise
    .then(function(data) {
        // 成功时执行（resolve 被调用）
        console.log("成功：", data);
    })
    .catch(function(error) {
        // 失败时执行（reject 被调用）
        console.log("失败：", error);
    });
```

---

## 为什么需要 Promise？

### 没有 Promise 时（回调地狱）

```javascript
// 多层嵌套，难以维护
getUser(function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            console.log(comments);
        });
    });
});
```

### 有了 Promise（链式调用）

```javascript
// 清晰、可读
getUser()
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.log(error));
```

---

## 你代码中的 Promise

```javascript
const getJSON = function(url) {
    return new Promise(function(resolve, reject) {
        // 异步操作：网络请求
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onload = function() {
            if (this.status === 200) {
                resolve(this.response);  // 成功 → 调用 resolve
            } else {
                reject(new Error(this.statusText));  // 失败 → 调用 reject
            }
        };
        client.send();
    });
};

// 使用
getJSON("https://api.example.com/data")
    .then(data => console.log(data))   // 成功时走这里
    .catch(error => console.log(error)); // 失败时走这里
```

---

## Promise 的两种写法对比

### 写法1：直接使用（你之前学的）
```javascript
promise.then(function(data) {
    // 成功
}, function(error) {
    // 失败
});
```

### 写法2：链式调用（更推荐）
```javascript
promise
    .then(function(data) {
        // 成功
    })
    .catch(function(error) {
        // 失败
    });
```

---

## Promise 的核心好处

| 特性 | 说明 |
|------|------|
| **不阻塞代码** | 异步操作不会卡住页面 |
| **链式调用** | 避免回调地狱，代码更清晰 |
| **统一错误处理** | 用 `.catch()` 统一捕获错误 |
| **状态不可变** | 一旦成功/失败，状态不会再变 |

---

## 生活中的比喻

```
你点外卖（异步操作）
    ↓
拿到订单号（Promise）
    ↓
等外卖制作（pending）
    ↓
外卖送达（fulfilled）→ 你开吃（then）
或
外卖超时/取消（rejected）→ 你投诉（catch）
```

---

## 一句话总结

> **Promise 是处理异步操作的对象，像一张"欠条"：成功时调用 `resolve` 触发 `.then()`，失败时调用 `reject` 触发 `.catch()`。** 😊