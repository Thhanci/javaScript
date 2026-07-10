# JavaScript基础完整笔记

## 第一章 JavaScript 入门

### 1. JavaScript 是什么

JavaScript（简称 JS）是一门运行在浏览器中的脚本语言。

主要作用：

-   网页交互
-   操作 DOM
-   处理用户事件
-   数据请求
-   支撑 Vue、React 等前端框架

前端三剑客：

    HTML：网页结构
    CSS：网页样式
    JavaScript：网页行为

------------------------------------------------------------------------

## 2. JavaScript 引入方式

### 行内 JS

``` html
<button onclick="alert('你好')">点击</button>
```

### 内部 JS

``` html
<script>
alert("Hello JS")
</script>
```

### 外部 JS

HTML：

``` html
<script src="./index.js"></script>
```

index.js：

``` javascript
alert("Hello")
```

------------------------------------------------------------------------

# 第二章 JavaScript 基础语法

## 注释

单行：

``` javascript
// 注释
```

多行：

``` javascript
/*
多行注释
*/
```

------------------------------------------------------------------------

## 输出方式

### alert

``` javascript
alert("hello")
```

### console.log

``` javascript
console.log("hello")
```

开发中最常用。

### document.write

``` javascript
document.write("hello")
```

------------------------------------------------------------------------

# 第三章 变量

变量用于保存数据。

## var

``` javascript
var name="张三"
```

## let

``` javascript
let age=18
```

可以重新赋值。

## const

``` javascript
const PI=3.14
```

不能重新赋值。

开发建议：

-   默认使用 const
-   需要修改时使用 let
-   避免使用 var

------------------------------------------------------------------------

# 第四章 数据类型

JavaScript 数据类型：

## Number

``` javascript
let age=18
let price=3.14
```

## String

``` javascript
let name="张三"
```

模板字符串：

``` javascript
`你好${name}`
```

## Boolean

``` javascript
true
false
```

## Undefined

``` javascript
let a;
```

## Null

``` javascript
let obj=null
```

------------------------------------------------------------------------

# 第五章 typeof

用于检测数据类型：

``` javascript
typeof 123
```

结果：

    number

------------------------------------------------------------------------

# 第六章 运算符

## 算术运算符

  符号   说明
  ------ ------
  \+     加
  \-     减
  \*     乘
  /      除
  \%     取余

## 赋值运算符

``` javascript
let a=10
a+=5
```

等价：

``` javascript
a=a+5
```

------------------------------------------------------------------------

# 第七章 条件判断

## if

``` javascript
if(age>=18){
 console.log("成年")
}
```

## if else

``` javascript
if(score>=60){
 console.log("及格")
}else{
 console.log("不及格")
}
```

------------------------------------------------------------------------

# 第八章 循环

## for循环

``` javascript
for(let i=0;i<5;i++){
 console.log(i)
}
```

------------------------------------------------------------------------

# 第九章 函数

函数是一段可以重复执行的代码。

定义：

``` javascript
function say(){
 console.log("hello")
}
```

调用：

``` javascript
say()
```

参数：

``` javascript
function add(a,b){
 return a+b
}
```

------------------------------------------------------------------------

# 第十章 数组

数组用于保存多个数据。

``` javascript
let arr=[1,2,3]
```

访问：

``` javascript
arr[0]
```

长度：

``` javascript
arr.length
```

常用方法：

``` javascript
arr.push(4)
arr.pop()
```

------------------------------------------------------------------------

# 第十一章 对象

对象用于保存多个属性。

``` javascript
let user={
 name:"张三",
 age:18
}
```

访问：

``` javascript
user.name
```

------------------------------------------------------------------------

# 第十二章 DOM操作

DOM 可以让 JavaScript 操作网页元素。

获取元素：

``` javascript
document.querySelector("#box")
```

修改内容：

``` javascript
box.innerHTML="你好"
```

修改样式：

``` javascript
box.style.color="red"
```

------------------------------------------------------------------------

# 第十三章 事件

点击事件：

``` javascript
button.onclick=function(){
 alert("点击")
}
```

常见事件：

-   click 点击
-   mouseover 鼠标进入
-   mouseout 鼠标离开
-   keydown 键盘按下

------------------------------------------------------------------------

# 第十四章 ES6 新特性

## 箭头函数

``` javascript
const add=(a,b)=>a+b
```

## 解构赋值

数组：

``` javascript
let [a,b]=[1,2]
```

对象：

``` javascript
let {name}=user
```

## 模板字符串

``` javascript
`你好${name}`
```

------------------------------------------------------------------------

# 第十五章 学习路线

JavaScript学习路线：

    HTML
    +
    CSS
    +
    JavaScript

    ↓

    DOM操作

    ↓

    Ajax

    ↓

    Vue

    ↓

    前端工程化
