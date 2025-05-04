import React from "react";

import { Hero } from "../components/Hero";
import { Guide } from "../components/Guide";

const Main = () => {
  return (
    <main id="main" role="banner">
      <div className="main_wrap">

        {/* hero 영역 */}
        <Hero />
        <Guide />

        <div className="event"></div>

        <div className="ticket"></div>

        <div className="media_wall"></div>
      </div>
    </main>
  );
};

export default Main;
