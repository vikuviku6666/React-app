import React, { useState, useEffect } from "react";

export const Tick: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = () => setTime(time + 1);
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <>
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </>
  );
};
