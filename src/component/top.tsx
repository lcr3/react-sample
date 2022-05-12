import React from "react";

type Props = {
  id: number;
  name: string;
};

const Top: React.FC<Props> = (props) => {
  return <div>{props.name}さん。こんにちは。</div>;
};
export default Top;
