import React, { useState } from "react";
import { useTodos } from "../ToDoContext";
import EditModal from "./EditModal";
import { toast } from "react-toastify";

const TodoList = () => {
  const { todos, deleteToDo, markAsDone } = useTodos();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
    console.log(selectedTodo);
  const openEditModal = (todo) => {
    setSelectedTodo(todo);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedTodo(null);
    setEditModalOpen(false);
  };

  const handleMarkAsDone = async (id) => {
    try {
      await markAsDone(id);
    } catch (error) {
      console.error("Error marking todo as done:", error);
      toast.error("Failed to mark todo as done. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteToDo(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Failed to delete todo. Please try again later.");
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.dateToComplete}</p>
            {todo.imageUrl && <img src={todo.imageUrl} alt="Todo" />}
            <button onClick={() => openEditModal(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
            {!todo.done && (
              <button onClick={() => handleMarkAsDone(todo._id)}>
                Mark as Done
              </button>
            )}
          </li>
        ))}
      </ul>
      <EditModal
        isOpen={editModalOpen}
        onClose={closeEditModal}
        todo={selectedTodo}
      />
    </div>
  );
};

export default TodoList;
