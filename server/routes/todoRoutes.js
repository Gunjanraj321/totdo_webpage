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

router.post("/", upload.single('imageUrl'), createTodo);
router.get("/", getTodos);
router.delete("/:id", deleteTodo);
router.patch("/:id", markAsCompleted);
router.put("/:id", updateTodo);

module.exports = router;
