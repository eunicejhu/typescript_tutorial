import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./Form";

import { Hello } from "./Hello";

ReactDOM.render(
  <Hello>
    <Form />
  </Hello>,
  document.getElementById("root")
);
