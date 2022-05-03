import React from "react";

type Props = {
  id: number;
  name: string;
}

class Top extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.name}さん。こんにちは。
      </div>
    )
  }
}
export default Top