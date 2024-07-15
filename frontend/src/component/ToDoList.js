import React, { useState } from "react";
import { useTodos } from "../context/ToDoContext";
import EditTodoPopup from "./EditTodoPopup";

const TodoList = () => {
  const { todos, deleteToDo, markAsDone, editToDo } = useTodos();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: "",
    description: "",
    dateToComplete: "",
  });

  const openPopup = (todo) => {
    setCurrentTodo(todo);
    setUpdatedTodo({
      title: todo.title,
      description: todo.description,
      dateToComplete: todo.dateToComplete,
    });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentTodo(null);
  };

  const handleUpdate = () => {
    editToDo(currentTodo._id, updatedTodo);
    closePopup();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="grid grid-cols-1 gap-4">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className={`p-4 border rounded ${
              todo.isCompleted ? "bg-green-100" : "bg-white"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">{todo.title}</h2>
                <p>{todo.description}</p>
                <p>
                  Complete By:{" "}
                  {new Date(todo.dateToComplete).toLocaleDateString()}
                </p>
                <div className="mt-2">
                  {!todo.isCompleted && (
                    <button
                      onClick={() => markAsDone(todo._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Mark as Done
                    </button>
                  )}
                  <button
                    onClick={() => openPopup(todo)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteToDo(todo._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
                {todo.isCompleted && (
                  <p className="text-green-600 font-bold mt-2">
                    Task Completed
                  </p>
                )}
              </div>
              {todo.imageUrl && (
                <img
                  src={todo.imageUrl}
                  alt={todo.title}
                  className="w-20 h-20 object-cover ml-4"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <EditTodoPopup
          todo={currentTodo}
          updatedTodo={updatedTodo}
          setUpdatedTodo={setUpdatedTodo}
          handleUpdate={handleUpdate}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default TodoList;
