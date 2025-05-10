import React, { useState, useEffect } from "react";
import chatbotLogo from "../assets/img/logo/chatbot_logo.png";
import { chatbotData } from "../data/chatbotData";

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

      <div className="chatbot">
        <div className="chatbot_button"></div>
      </div>

      <div className="chatbot_container">
        <div className="chatbot_header">
          <div className="chatbot_logo">
            <img src={chatbotLogo} alt="chatbot_logo" />
          </div>
          <span className="chatbot_name"> VISITOR</span>
        </div>
        <div className="chatbot_chatarea">
          <div className="message">
            <div className="text">
              안녕하세요 🤚
              <br />
              안내를 도와드릴 코엑스 챗봇입니다.
              <br />
              궁금하신 점을 입력하시거나 아래 버튼을 눌러주세요!
            </div>
            <div className="chatbutton_list">
              {chatbotData.map((item) => (
                <button className="chatinfo_item">
                  <span className="chatinfo_txt">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="chatbot_input">
          <div className="chatbot_input_inner">
            <div className="input_icon">
              <svg
                data-v-170f181a=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="homeIconTitle"
                aria-describedby="homeIconDesc"
              >
                <g data-v-170f181a="" clip-path="url(#clip0_1718_122)">
                  <path
                    data-v-170f181a=""
                    d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="input_wrap">
              <input
                type="text"
                placeholder="여기에 입력해 주세요."
                title="여기에 입력해 주세요."
                tabindex={0}
                class="input_chatbot"
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
