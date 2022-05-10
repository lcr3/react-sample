import React from "react";

type Props = {
  title: string;
};

class TodoItem extends React.Component<Props, {}> {
  render() {
    return <li>{this.props.title}</li>;
  }
}

export default TodoItem;
