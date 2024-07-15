import React, { useState } from "react";
import { useTodos } from "../ToDoContext";

const ToDoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateToComplete, setDateToComplete] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const { addToDo } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("dateToComplete", dateToComplete);

    if (imageUrl) {
      formData.append("imageUrl", imageUrl);
    }

    await addToDo(formData);
    setTitle("");
    setDescription("");
    setDateToComplete("");
    setImageUrl(null);
  };

  const handleImage = (e) => {
    setImageUrl(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Todo</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description :</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date to Complete :</label>
        <input
          type="date"
          value={dateToComplete}
          onChange={(e) => setDateToComplete(e.target.value)}
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
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Add Todo</button>
    </form>
  );
};

export default ToDoForm;
