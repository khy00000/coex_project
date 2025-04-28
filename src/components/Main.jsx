import React from "react";

const Main = () => {
  return (
    <main id="main" role="banner">
      <div className="hero">
        <div className="wrap">
          <div className="hero_text">
            <div className="hero_text_subtitle">What’s On</div>
            <div className="hero_text_title"></div>
            <div className="hero_text_bottom">
              <div className="info_left"></div>
              <a href="/"></a>
            </div>
          </div>
          <div className="hero_slide"></div>
        </div>
      </div>

      <div className="guide">
        <div className="wrap">
          <div className="guide_left"></div>
          <div className="guide_right">
            <div className="guide_title">GUIDE</div>
            <div className="guide_menu">
              <div className="guide_menu_1"></div>
              <div className="guide_menu_2"></div>
              <div className="guide_menu_3"></div>
              <div className="guide_menu_4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="event">
        <div className="wrap"></div>
      </div>

      <div className="ticket">
        <div className="wrap"></div>
      </div>

      <div className="news">
        <div className="wrap"></div>
      </div>

      <div className="media_wall">
        <div className="wrap"></div>
      </div>
    </main>
  );
};

export default Main;
