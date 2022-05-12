import React from "react";

type Props = {
  title: string;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <>
      <li>{props.title}</li>;
    </>
  );
};

export default TodoItem;
