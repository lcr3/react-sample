import React from "react";
import logo from "./logo.svg";
import Top from "./component/top";
import TodoInput from "./component/Todoinput";
import TodoList from "./component/ToDoList";
import "./App.css";

function App() {
  const tasks = [
    { title: 'todo1', id: 0 },
    { title: 'todo2', id: 1 }
  ]
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList todos={tasks}></TodoList>
    </div>
  )
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Top id={2} name="test"></Top>
      </header>
    </div>
  );
}

export default App;
