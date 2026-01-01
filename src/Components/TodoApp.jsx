import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterBar from "./FilterBar";

const FILTERS = {
  ALL: "All",
  COMPLETED: "Completed",
  PENDING: "Pending",
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.COMPLETED) return todo.completed;
    if (filter === FILTERS.PENDING) return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h1 className="text-2xl font-bold text-center mb-4">📝 To-Do App</h1>
      <TodoInput addTodo={addTodo} />
      <FilterBar filter={filter} setFilter={setFilter} filters={FILTERS} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
