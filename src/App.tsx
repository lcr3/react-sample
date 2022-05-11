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

class App extends React.Component<{}, TodoState> {
  constructor(state: any) {
    super(state);
    this.state = {
      todos: [
        {
          title: "デフォルトTODO",
          id: 0,
        },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title: string) {
    const { todos, uniqueId }: TodoState = this.state;

    todos.push({
      title,
      id: uniqueId,
    });

    this.setState({
      todos: todos,
      uniqueId: uniqueId + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
