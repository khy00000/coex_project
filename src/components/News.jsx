import React, { useState } from "react";
import { Link } from "react-router-dom";

import mainnewsdata from "../data/mainnewsData";

import FadeInGSAP from "../components/FadeInGSAP";

function News() {
  // 공지사항 tabid : 0 기본값으로
  const [activeTabId, setActiveTabId] = useState(0);

  //활성화된 탭 콘텐츠
  const activeTab = mainnewsdata.find((item) => item.tabid === activeTabId);

  return (
    <div className="news">
      {/* 뉴스 타이틀 */}
      <div className="news_title">
        <h3 className="news_title_wrap">
        <FadeInGSAP delay={0.7}>
          <span className="news_title_text">코엑스 소식</span>
          </FadeInGSAP>
        </h3>
        <div className="news_link_wrap">
          <Link className="news_link" to="#">
            More
          </Link>
        </div>
      </div>
      <div className="news_con">
        {/* 탭메뉴 타이틀 */}
        <div className="news_con_tap_wrap">
          <ul className="news_con_tap">
            {mainnewsdata.map((item) => (
              <li
                key={item.tabid}
                className={`news_con_tap_item ${
                  item.tabid === activeTabId ? "active" : ""
                }`}
              >
                {item.contents ? (
                  <button
                    type="button"
                    className="news_con_tap_item_button"
                    onClick={() => setActiveTabId(item.tabid)}
                  >
                    {item.tabtitle}
                  </button>
                ) : (
                  <Link to={item.link} className="news_con_tap_item_link">
                    {item.tabtitle}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 탭메뉴 리스트 영역 */}
        <div className="news_con_list">
          <ul className="news_area">
            {activeTab?.contents?.map((contentsItem) => (
              <FadeInGSAP delay={0.8}>
              <li className="news_item" key={contentsItem.contentsid}>
                <Link to={contentsItem.link} className="news_item_link">
                  <div className="news_item_date">
                    <span className="news_item_dateday">
                      {contentsItem.dateday}
                    </span>
                    <span className="news_item_datemonth">
                      {contentsItem.datemonth}
                    </span>
                  </div>
                  <div className="news_item_title">{contentsItem.title}</div>
                </Link>
              </li>
              </FadeInGSAP>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
