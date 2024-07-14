import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useTodos } from "../ToDoContext";

const EditModal = ({ isOpen, onClose, todo }) => {
  const { editToDo } = useTodos();
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDateToComplete, setEditDateToComplete] = useState("");
  console.log(todo)
  useEffect(() => {
    if (todo) {
      setEditTitle(todo.title);
      setEditDescription(todo.description);
      setEditDateToComplete(todo.dateToComplete);
    }
  }, [todo]);

  const handleEditSubmit = async () => {
    try {
      await editToDo(todo._id, {
        title: editTitle,
        description: editDescription,
        dateToComplete: editDateToComplete,
      });
      onClose(); 
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  if (!todo) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <h2>Edit Todo</h2>
      <label>Title:</label>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={editDescription}
        onChange={(e) => setEditDescription(e.target.value)}
      />
      <label>Date to Complete:</label>
      <input
        type="date"
        value={editDateToComplete}
        onChange={(e) => setEditDateToComplete(e.target.value)}
      />
      <button onClick={handleEditSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default EditModal;
