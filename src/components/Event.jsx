import React from "react";
import { Link } from "react-router-dom";
import eventlistData from "../data/eventlistData";
import useIsMobile from "./useIsMobile";
import FadeInGSAP from "../components/FadeInGSAP";

const Event = () => {
  const isMobile = useIsMobile();

  return (
    <div className="event">
      <div className="event_title_wrap">
        <FadeInGSAP delay={0.5}>
          <h3>
            <span className="event_title">진행 중인 행사</span>
            <span className="event_title_num">23</span>
          </h3>
        </FadeInGSAP>
        <Link to="#" className="event_cal_text">
          View All Events
        </Link>
      </div>

      <div className="event_table">
        <div className="event_table_wrap">
          {eventlistData.slice(0, 10).map((item, index) => (
            <div
              className={`
                event_list_item
                ${index === 0 ? "first_item" : ""}
                ${item.ad ? "has-ad" : ""}
                ${!isMobile && index > 5 ? "bottom_item" : ""}
                ${!isMobile && [2, 6].includes(index) ? "item_3_7" : ""}
                ${isMobile && [1, 4, 7].includes(index) ? "item_3_7" : ""}
                ${isMobile && index > 6 ? "bottom_item" : ""}
              `.trim()}
              key={item.id}
            >
              {/* 이벤트 아이템 */}
              <Link to={item.link} className={`event_list_item_link`}>
                <div
                  className="evnet_list_item_category"
                  data-category={item.category}
                >
                  {item.category}
                </div>
                <div className="event_list_item_title">{item.title}</div>
                <div className="event_list_item_date">{item.date}</div>
              </Link>

              {/* 호버 아이템 */}
              <Link to={item.link} className="event_list_item_hover">
                <img src={item.img} alt={`이벤트 리스트이미지 ${item.id}`} />
              </Link>

              {/* 광고 아이템 */}
              <div className="ad_box">
                <div className="ad">AD</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
