const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const {
  createTodo,
  getTodos,
  deleteTodo,
  markAsCompleted,
  updateTodo,
} = require("../controllers/TodoController");

router.post("/todos", upload.single('imageUrl'), createTodo);
router.get("/todos", getTodos);
router.delete("/todos/:id", deleteTodo);
router.patch("/todos/:id", markAsCompleted);
router.put("/todos/:id", updateTodo);

module.exports = router;
