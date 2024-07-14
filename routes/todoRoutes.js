const express = require('express');
const router = express.Router();

const {createTodo, getTodos, deleteTodo, markAsCompleted} = require('../controllers/TodoController');

router.post('/todos', createTodo);
router.get('/todos', getTodos);
router.delete('/todos/:id', deleteTodo);
router.patch('/todos/:id', markAsCompleted)

module.exports = router;