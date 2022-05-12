import React from "react";

type Props = {
  // handleClilck: VoidFunction;
};

const TodoInput: React.FC<Props> = (props) => {
  // this.props.handleClilck = this.props.handleClilck.bind(this);
  return (
    <div>
      <input placeholder="新規ToDoを入力してください"></input>
      <button>登録</button>
    </div>
  );
};

export default TodoInput;
