import React from "react";

class TodoInput extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="新規ToDoを入力してください"></input>
        <button>登録</button>
      </div>
    );
  }
}

export default TodoInput;
