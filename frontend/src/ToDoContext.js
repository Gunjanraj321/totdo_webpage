import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToDoContext = createContext();

export const useTodos = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/todos");
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
        toast.error("Failed to fetch todos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);


  const deleteToDo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
      toast.success("Todo deleted successfully!");
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Failed to delete todo. Please try again later.");
    }
  };

  const markAsDone = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/api/todos/${id}`, {});
      setTodos(todos.map((todo) => (todo._id === id ? { ...todo, done: true } : todo)));
      toast.success("Todo marked as done successfully!");
    } catch (error) {
      console.error("Error marking todo as done:", error);
      toast.error("Failed to mark todo as done. Please try again later.");
    }
  };


  return (
    <ToDoContext.Provider
      value={{ todos, loading, deleteToDo, markAsDone }}
    >
      {children}
      <ToastContainer />
    </ToDoContext.Provider>
  );
};
