import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { todosEndpoint } from "../agent/agent";

const ToDoContext = createContext();

export const useTodos = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${todosEndpoint}`);
      setTodos(response.data.todos);
    } catch (error) {
      toast.error("Failed to fetch todos. Please try again later.");
    } 
  };

  const deleteToDo = async (id) => {
    try {
      await axios.delete(`${todosEndpoint}/${id}`);
      fetchTodos();
      setTodos(todos.filter((todo) => todo._id !== id));
      toast.success("Todo deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete todo. Please try again later.");
    }
  };

  const markAsDone = async (id) => {
    try {
      await axios.patch(`${todosEndpoint}/${id}`, {});
      fetchTodos();
      setTodos(todos.map((todo) => (todo._id === id ? { ...todo, done: true } : todo)));
      toast.success("Todo marked as done successfully!");
    } catch (error) {
      toast.error("Failed to mark todo as done. Please try again later.");
    }
  };

  const editToDo = async (id, updatedToDo) => {
    try {
      const response = await axios.put(`${todosEndpoint}/${id}`, updatedToDo);
      fetchTodos();
      setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
      toast.success("Todo updated successfully!");
    } catch (error) {
      toast.error("Failed to update todo. Please try again later.");
    }
  };

  const addToDo = async (newToDo) => {
    try {
      await axios.post(todosEndpoint, newToDo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchTodos();
      toast.success("Todo added successfully!");
    } catch (error) {
      toast.error("Failed to add todo. Please try again later.");
    }
  };

  return (
    <ToDoContext.Provider
      value={{ todos, deleteToDo, markAsDone, editToDo, addToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
