import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import Form from "./Form";
import { throttle } from "lodash";

import { Hello } from "./Hello";
const PageA: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    throttle(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <Hello>
      {count}
      <Form />
    </Hello>
  );
};

ReactDOM.render(<PageA />, document.getElementById("root"));
