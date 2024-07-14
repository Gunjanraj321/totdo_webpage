import axios from "axios";
import React, { useState } from "react";

const ToDoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateToComplete, setDateToComplete] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("dateToComplete", dateToComplete);

    if (imageUrl) {
      formData.append("imageUrl", imageUrl);
    }

    try {
      const response = await axios.post("http://localhost:3000/api/todos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setTitle("");
      setDateToComplete("");
      setDescription("");
      setImageUrl(null);
    } catch (error) {
      console.error("there is an error while creating todo : ", error);
    }
  };

  const handleImage = (e) => {
    setImageUrl(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description : </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date to Complete : </label>
        <input
          type="date"
          value={dateToComplete}
          onChange={(e) => setDateToComplete(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image : </label>
        <input
          type="file"
          onChange={handleImage}
          accept="image/*"
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default ToDoForm;