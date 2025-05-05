import React from "react";
import { Link } from "react-router-dom";
import eventlistData from "../data/eventlistData";

const Event = () => {
  return (
    <div className="event">
      <div className="event_title_wrap">
        <h3>
          <span className="event_title">진행 중인 행사</span>
          <span className="event_title_num">23</span>
        </h3>
        <Link to="#" className="event_cal_text">
          View All Events
        </Link>
      </div>

      <div className="event_table">
        <div className="event_list">
          {eventlistData.map((item) => (
            <div className="event_list_item" key={item.id}>
              <Link to={eventlistData.link} className="event_list_item_link">
                <div className="evnet_list_item_category">
                  {eventlistData.category}
                </div>
                <div className="event_list_item_title">
                  {eventlistData.title}
                </div>
                <div className="event_list_item_date">{eventlistData.date}</div>
              </Link>
              <div className="event_list_item_hover">
                <img
                  className="blind"
                  src={eventlistData.img}
                  alt={`이벤트 리스트이미지 ${eventlistData.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
