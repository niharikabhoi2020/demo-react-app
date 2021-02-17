import React from "react";
import { useHistory } from "react-router-dom";

const Demo = () => {
  const history = useHistory();

  return (
    <div>
      <p>Welcome to fruits.com!!</p>
      <>
        {" "}
        <button onClick={() => history.push("/fruits/1")}>Banana</button>{" "}
      </>
      <>
        {" "}
        <button onClick={() => history.push("/fruits/2")}>Apple</button>{" "}
      </>
      <>
        {" "}
        <button onClick={() => history.push("/fruits/3")}>Mango</button>
      </>
    </div>
  );
};

export default Demo;
