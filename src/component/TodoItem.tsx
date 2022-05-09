import React from "react";

type Props = {
  title: string;
}

const TodoItem = (props: Props) => {
  return (
    <li>
      (props.title)
    </li>
  )
}

export default TodoItem