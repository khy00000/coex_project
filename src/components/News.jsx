import React from "react";
import { Link } from "react-router-dom";

import mainnewsdata from "../data/mainnewsData";

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
      <div className="news_con">
        {/* 탭메뉴 타이틀 */}
        <div className="news_con_tap_wrap">
          <ul className="news_con_tap">
            {mainnewsdata.map((item, index) => (
              <li className="news_con_tap_item" key={item.tabid}>
                <Link to="#" className="news_con_tap_item_link">
                  {item.tabtitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 탭메뉴 리스트 영역 */}
        <div className="news_con_list">
          <ul className="news_area">
            {mainnewsdata.map((item) =>
              item.contents
                ? item.contents.map((contentsItem) => (
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
                        <div className="news_item_title">
                          {contentsItem.title}
                        </div>
                      </Link>
                    </li>
                  ))
                : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
