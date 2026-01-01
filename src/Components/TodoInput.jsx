import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-2 rounded-l bg-gray-800 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 px-4 rounded-r hover:bg-green-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
