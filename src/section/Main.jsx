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
      </div>

      <div className="main_ticket">
        <div className="main_ticket_wrap">
          <h3>
            <span className="ticket_title">티켓 오픈</span>
            <span className="ticket_title_num">1</span>
          </h3>
          <div className="ticket_con">
            <div className="ticket_con_wrap">
              <div className="ticket_left">
                <span className="left_bg" />
              </div>
              <div className="ticket_center"></div>
              <div className="ticket_right">
                <span className="right_bg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="media_wall"></div>
    </main>
  );
};

export default Main;
