import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides from "./component/simples/slide";
import Hero from "./component/hero/mulity";
import Head from "./component/member/membership";

const App = () => {
  return (
    <>
      <Slides />
      <Hero />
      <Head />
    </>
  );
};
export default App;
