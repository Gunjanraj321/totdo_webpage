import React from "react";
import { useTodos } from "../ToDoContext";
import { toast } from "react-toastify";

const TodoList = () => {
  const { todos, deleteToDo, markAsDone } = useTodos();

  const handleDelete = async (id) => {
    try {
      await deleteToDo(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Failed to delete todo. Please try again later.");
    }
  };

  const handleMarkAsDone = async (id) => {
    try {
      await markAsDone(id);
    } catch (error) {
      console.error("Error marking todo as done:", error);
      toast.error("Failed to mark todo as done. Please try again later.");
    }
  };


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.dateToComplete}</p>
          {todo.imageUrl && <img src={todo.imageUrl} alt="Todo" />}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
          {!todo.done && <button onClick={() => handleMarkAsDone(todo._id)}>Mark as Done</button>}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
