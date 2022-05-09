import React from "react";
import TodoItem from "./TodoItem";

type Props = {
  todos: {
    title: string;
    id: number;
  }[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        <TodoItem title={todo.title} />;
      })}
    </>
  );
};

export default TodoList;
