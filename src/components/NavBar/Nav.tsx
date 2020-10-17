import React, { useState } from "react";
import "../../styles/main.scss";
interface Props {
  firstName: string;
  lastName: string;
  buttonText?: string;
}

export const Nav: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>
        Hi i am using sass. my name is {props.firstName} {props.lastName}{" "}
      </h1>
      <p>{count}</p>
      <button onClick={increment}>{props.buttonText || "ClickTo"}</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
