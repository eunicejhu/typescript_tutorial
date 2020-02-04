import { enquireScreen } from "enquire-js";
import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import Anim from "./Anim";
import Header from "./Header";
import Page1 from "./Page1";
import "./static/style";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b: boolean) => {
      setIsMobile(!!b);
    });
  });

  return (
    <DocumentTitle title="ZUOQIN HU">
      <div>
        <Header />
        <div className="home-wrapper">
          <Anim />
          {/* <Banner isMobile={isMobile} /> */}
          <Page1 isMobile={isMobile} />
          {/* <Page2 /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </DocumentTitle>
  );
};

export default Home;
