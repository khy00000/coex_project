import React from "react";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="news">
      {/* 뉴스 타이틀 */}
      <div className="news_title">
        <h3 className="news_title_wrap">
          <span className="news_title_text">코엑스 소식</span>
        </h3>
        <div className="news_link_wrap">
          <Link className="news_link" to="#">
            More
          </Link>
        </div>
      </div>

      {/* 뉴스 탭메뉴 */}
      <div className="news_con">
        <div className="news_con_tap_wrap">
          <ul className="news_con_tap">
            <li className="news_con_tap_item">
              <Link to="#" className="news_con_tap_item_link">
                공지사항
              </Link>
            </li>
            <li className="news_con_tap_item">
              <Link to="#" className="news_con_tap_item_link">
                입찰정보
              </Link>
            </li>
            <li className="news_con_tap_item">
              <Link to="#" className="news_con_tap_item_link">
                뉴스
              </Link>
            </li>
          </ul>
        </div>
        <div className="news_con_list">
          <ul className="news_area">
            <li className="news_item">
              <Link to="#" className="news_item_link">
                {/* 뉴스 데이터 먼저 */}
                <div className="news_item_date"></div>
                <div className="news_item_title"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
