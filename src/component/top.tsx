import React from "react";

type Props = {
  id: number;
  text: string;
};

export const Top = (props: Props) => {
  return <div>{props.text}</div>;
};
