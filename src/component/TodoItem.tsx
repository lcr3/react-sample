import React from "react";

type Props = {
  title: string;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <>
      {props.title}
    </>
  );
};

export default TodoItem;
