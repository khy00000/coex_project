import React from "react";
import { Link } from "react-router-dom";

export const Guide = () => {
  return (
    <div className="guide">
      <div className="guide_left">
        <h3 className="guide_left_title">대관안내</h3>
        <span className="guide_left_title_text">
          전시 및 회의실
          <br />
          임대 정보
        </span>
      </div>
      <div className="guide_right">
        <div className="guide_right_title">GUIDE</div>
        <div className="guide_right_list">
          <ul>
            <li>
              <Link to="#">
                <div className="guide_right_icon"></div>
                <div className="guide_right_text"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
