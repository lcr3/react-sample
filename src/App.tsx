import React, { Component } from "react";

import TodoInput from "./component/Todoinput";
import TodoList from "./component/ToDoList";
import "./App.css";

type TodoState = {
  todos: {
    title: string;
    id: number;
  }[];
  uniqueId: number;
};

function App() {
  // const [todos: {
  //   todos: [
  //     {
  //       title: "デフォルトTODO",
  //       id: 0,
  //     },
  //   ],
  //   uniqueId: 1,
  // }]
  // this.state = {
  //   todos: [
  //     {
  //       title: "デフォルトTODO",
  //       id: 0,
  //     },
  //   ],
  //   uniqueId: 1,
  // };
  // this.addTodo = this.addTodo.bind(this);


  // addTodo(title: string) {
  //   const { todos, uniqueId }: TodoState = this.state;

  //   todos.push({
  //     title,
  //     id: uniqueId,
  //   });

  //   this.setState({
  //     todos: todos,
  //     uniqueId: uniqueId + 1,
  //   });
  // }

    return (
      <div className="App">
        <h1>TODO App</h1>
        <TodoInput />
        {/* <TodoList todos={this.state.todos} /> */}
      </div>
    );
  
}

export default App;
