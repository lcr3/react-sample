import React from "react";
import TodoItem from "./TodoItem";

type Props = {
  todos: {
    title: string;
    id: number;
  }[];
};

class TodoList extends React.Component<Props, {}> {
  render() {
    {
      return (
        <div>
          {this.props.todos.map(({ title, id }) => (
            <TodoItem title={title} key={id} />
          ))}
        </div>
      );
    }
  }
}

export default TodoList;
