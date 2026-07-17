const express = require('express');
const app = express();

// 解析表单数据（application/x-www-form-urlencoded）
app.use(express.urlencoded({ extended: true }));

//  添加这行：解析 JSON 数据（application/json）
app.use(express.json());

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/51.事件类型之表单事件.html');
});

const submissions = [];

app.post('/database', (req, res) => {
    submissions.push(req.body);
    console.log('收到数据：', req.body);
    console.log('总共提交：', submissions.length);
    res.send(' 提交成功！');
});

app.get('/data', (req, res) => {
    res.json(submissions);
});

app.listen(3000, () => {
    console.log(' 服务器运行在 http://localhost:3000');
});


// npm install expressdir server.js