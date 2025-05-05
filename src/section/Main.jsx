import React from "react";

import Hero from "../components/Hero";
import Guide from "../components/Guide";
import Event from "../components/Event";

const Main = () => {
  return (
    <main id="main" role="banner">
      <div className="main_wrap">

        <Hero />
        <Guide />
        <Event />

        <div className="ticket"></div>

        <div className="media_wall"></div>
      </div>
    </main>
  );
};

export default Main;