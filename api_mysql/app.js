// app.js
const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routers/todos');
const app = express();

// Middleware
app.use(bodyParser.json());

// Kết nối router
app.use('/todos', todosRouter);

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000/todos`);
});
