import React from "react";

import Hero from "../components/Hero";
import Guide from "../components/Guide";
import Event from "../components/Event";
import Ticket from "../components/Ticket";
import News from "../components/News";
import Mediawall from "../components/Mediawall";

const Main = () => {

  return (
    <main id="main" role="banner">
      <div className="main_wrap">
        <Hero />
        <Guide />
        <Event />
      </div>

      <Ticket />

      <div className="main_wrap">
        <News />
      </div>

      <Mediawall />
    </main>
  );
};

export default Main;
