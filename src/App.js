import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Todos</button>
      <div>0 left</div>
    </>
  )
}

export default App;
