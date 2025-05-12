import React, { useState, useEffect } from "react";
import chatbotLogo from "../assets/img/logo/chatbot_logo.png";
import { chatbotData } from "../data/chatbotData";

const Widget = () => {
  // 탑버튼 visible
  const [visible, setVisible] = useState(false);
  // 챗봇 아이콘 클릭 close/챗봇 컨테이너 활성 비활성
  const [cbActive, setCbActive] = useState(false);
  // 챗봇 닫기 버튼
  const [cbClose, setCbclose] = useState(false);

  // 탑버튼 visible 시점
  useEffect(() => {
    const handlescroll = () => {
      setVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  // 탑버튼 클릭 이벤트
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 챗봇 close 아이콘 활성/비활성
  const chatbotActive = () => {
    setCbActive((prev) => !prev);
  };

  // 챗봇 오른쪽 닫기
  const cbiconClose = () => {
    setCbclose(true);
    console.log('cbClose 상태:', true);
  };

  return (
    <div id="Widget " className="Widget">
      {/* 탑버튼 */}
      <button
        onClick={scrollToTop}
        className={`top_button ${visible ? "visible" : ""}`}
      >
        <span className="top_text blind">Top</span>
      </button>

      {/* 챗봇 */}
      <div
        className={`chatbot ${cbActive ? "active" : ""}  ${cbClose ? "cb_close" : ""} `}
        onClick={chatbotActive}
      >
        <div className="chatbot_button">
          {/* 챗봇 아이콘 */}
          <div className="chatbot_icon"></div>
          {/* 챗봇 컨테이너 활성 & 닫기 */}
          <div className="chatbot_active_x"></div>
        </div>
      </div>

      {/* 챗봇 닫기 */}
      <div
        className={`chatbot_close ${cbClose ? "cb_close" : ""}`}
        onClick={cbiconClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64.19 64.19"
          width="24"
          height="24"
          className="close_svg"
        >
          <g data-name="chatbot-close">
            <circle cx="32.1" cy="32.1" r="32.1" className="chatbot_close_bg" />
            <line
              x1="41.58"
              y1="22.28"
              x2="22.62"
              y2="41.24"
              className="chatbot_close_x"
            />
            <line
              x1="41.58"
              y1="41.24"
              x2="22.62"
              y2="22.28"
              className="chatbot_close_x"
            />
          </g>
        </svg>
      </div>

      {/* 챗봇 컨테이너 */}
      <div className={`chatbot_container_wrap ${cbActive ? "active" : ""} ${cbClose ? "cb_close" : ""} `}>
        <div className="chatbot_container">
          <div className="chatbot_header">
            <div className="chatbot_logo">
              <img src={chatbotLogo} alt="chatbot_logo" />
            </div>
            <span className="chatbot_name">VISITOR</span>
          </div>

          <div className="chatbot_chatarea">
            <div className="message">
              <div className="text">
                안녕하세요 🤚
                <br />
                <br />
                안내를 도와드릴 코엑스 챗봇입니다. 지금은 자동안내 가능
                시간입니다.
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
              <svg
                data-v-170f181a=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-170f181a="" clip-path="url(#clip0_1718_122)">
                  <path
                    data-v-170f181a=""
                    d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="지금은 상담시간이 아닙니다."
                title="여기에 입력해 주세요."
                tabIndex={0}
                className="input_chatbot"
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
