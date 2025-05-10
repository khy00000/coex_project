import React, { useState, useEffect } from "react";

const Widget = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const scrollToTop = () => {
    window.scrolllTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="Widget " className="Widget">
      <button
        onClick={scrollToTop}
        className={`top_button ${visible ? "visible" : ""}`}
      >
        <span className="top_text blind">Top</span>
      </button>

      <div className="chatbot"></div>

      <div className="chatbot_container">
        <div className="chatbot_header"></div>
        <div className="chatbot_chatarea"></div>
        <div className="chatbot_input"></div>
      </div>
    </div>
  );
};

export default Widget;
