import React from "react";

const EditTodoPopup = ({ todo, updatedTodo, setUpdatedTodo, handleUpdate, closePopup }) => {
  if (!todo) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
        <input
          type="text"
          value={updatedTodo.title}
          onChange={(e) => setUpdatedTodo({ ...updatedTodo, title: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Title"
        />
        <textarea
          value={updatedTodo.description}
          onChange={(e) => setUpdatedTodo({ ...updatedTodo, description: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Description"
        ></textarea>
        <input
          type="date"
          value={updatedTodo.dateToComplete}
          onChange={(e) => setUpdatedTodo({ ...updatedTodo, dateToComplete: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Update
        </button>
        <button onClick={closePopup} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTodoPopup;
