import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`flex justify-between items-center p-2 rounded bg-gray-800 hover:bg-gray-700 transition`}
    >
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
