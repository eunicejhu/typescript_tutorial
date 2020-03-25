import React, { Suspense } from "react";

const Form = React.lazy(() =>
  import(/* webpackChunkName: "Form-async.js" */ "./Form")
);

const Hello: React.FC = (children: React.ReactNode) => (
  <Suspense fallback={"loading..."}>
    <div>
      Hello <Form />
      {children}
    </div>
  </Suspense>
);
export { Hello };
