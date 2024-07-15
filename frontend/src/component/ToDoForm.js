import React, { useState } from "react";
import { useTodos } from "../context/ToDoContext";

const ToDoForm = () => {
  const [todoFormData, setTodoFormData] = useState({
    title: "",
    description: "",
    dateToComplete: "",
    imageUrl: "",
  });

  const { addToDo } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addToDo(todoFormData);
    setTodoFormData({
      title: "",
      description: "",
      dateToComplete: "",
      imageUrl: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    setTodoFormData({
      ...todoFormData,
      imageUrl: e.target.files[0],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Add Todo</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title :</label>
        <input
          type="text"
          name="title"
          value={todoFormData.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description :</label>
        <input
          type="text"
          name="description"
          value={todoFormData.description}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date to Complete :</label>
        <input
          type="date"
          name="dateToComplete"
          value={todoFormData.dateToComplete}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image :</label>
        <input
          type="file"
          onChange={handleImage}
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4"
      >
        Add todoFormData
      </button>
    </form>
  );
};

export default ToDoForm;
