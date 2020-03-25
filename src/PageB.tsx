import React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./Hello";
import { Button } from "antd";

const PageB: React.FC = () => {
  return (
    <Hello>
      <Button />
    </Hello>
  );
};

ReactDOM.render(<PageB />, document.getElementById("root"));
