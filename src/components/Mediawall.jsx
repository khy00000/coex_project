import React from "react";
import { Link } from "react-router-dom";

import mediawallimg1 from "../assets/img/bg/mediawall_con1.jpg";
import mediawallimg2 from "../assets/img/bg/mediawall_con2.jpg";
import mediawallimg3 from "../assets/img/bg/mediawall_con3.jpg";
import mediawallimg4 from "../assets/img/bg/mediawall_con4.jpg";
import mediawallimg5 from "../assets/img/bg/mediawall_con5.jpg";
import mediawallimg6 from "../assets/img/bg/mediawall_con6.jpg";

function Mediawall() {
  return (
    <div className="mediawall">
      <div className="media_back"></div>

      <div className="mediawall_wrap">
        <div className="mediawall_left">
          <h3 className="mediawall_title_wrap">
            <span className="mediawall_title">Media Wall</span>
          </h3>

          <div className="mediameta">
            <ul className="mediameta_item">
              <li className="mediameta_item_list">
                <Link className="mediameta_item_list_link">INSTAGRAM</Link>
              </li>
              <li className="mediameta_item_list">
                <Link className="mediameta_item_list_link">YOUTUBE</Link>
              </li>
              <li className="mediameta_item_list">
                <Link className="mediameta_item_list_link">FACEBOOK</Link>
              </li>
              <li className="mediameta_item_list">
                <Link className="mediameta_item_list_link">NAVER BLOG</Link>
              </li>
              <li className="mediameta_item_list">
                <Link className="mediameta_item_list_link">Twitter</Link>
              </li>
            </ul>

            <div className="mediawall_sub">
              <span className="mediawall_sub_text">
                To Create The Best
                <br />
                Event Service
              </span>
            </div>
          </div>
        </div>

        <div className="mediawall_right">
          {/* 미디어 이미지 영역 */}
          {/* <div className="mediawall_right_wrap">
            <div className="mediawall_ins_img">
              <img src={mediawallimg1} alt="mediawallimg1" />
            </div>
            <div className="mediawall_ins_img">
              <img src={mediawallimg2} alt="mediawallimg2" />
            </div>
            <div className="mediawall_ins_img">
              <img src={mediawallimg3} alt="mediawallimg3" />
            </div>
            <div className="mediawall_ins_img">
              <img src={mediawallimg4} alt="mediawallimg4" />
            </div>
            <div className="mediawall_ins_img">
              <img src={mediawallimg5} alt="mediawallimg5" />
            </div>
            <div className="mediawall_ins_img">
              <img src={mediawallimg6} alt="mediawallimg6" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Mediawall;
