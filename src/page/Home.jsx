import React from "react";

import Hero from "../components/Hero";
import Guide from "../components/Guide";
import Event from "../components/Event";
import Ticket from "../components/Ticket";
import News from "../components/News";
import Mediawall from "../components/Mediawall";

import useIsMobile from "../components/useIsMobile";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <>
          <Hero />
          
          <div className="center-wrap">
            <Guide />
            <Event />
          </div>
        </>
      ) : (
        <div className="center-wrap">
          <Hero />
          <Guide />
          <Event />
        </div>
      )}

      <Ticket />

      <div className="center-wrap">
        <News />
      </div>

      <Mediawall />
    </div>
  );
};

export default Home;
