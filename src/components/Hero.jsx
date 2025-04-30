import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../assets/img/bg/hero_slide_themaision.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_slide_box">
        <div className="hero_slide">
          {/* hero 슬라이드 왼쪽 텍스트 영역 */}
          <div className="hero_slide_left">
            <div className="hero_sub_title">What’s On</div>
            <h2 className="hero_title">
              <a href="/" className="hero_title_slide">
                2025 더 메종
              </a>
            </h2>

            <div className="here_title_info">
              <div className="here_title_info_date">2025.05.08-2025.05.11</div>
              <div className="here_title_info_location">A홀</div>
            </div>

            <Link
              to="https://www.hometabledeco.com"
              className="here_title_arrow"
              target="_blank"
            ></Link>
          </div>

          {/* hero 이미지 슬라이드 영역 */}
          <div className="hero_slide_right">
            <div className="hero_slide_r_box">
              <div className="hero_slide_r_con swiper-container">
                <div className="hero_slide_r_wrapper swiper-wrapper">
                  {/* hero 이미지 슬라이드 박스 */}
                  <div
                    id="hero_slide_img"
                    className="hero_slide_r_slide swiper-slide"
                    data-category="EXHIBITION"
                    data-sub="What’s On"
                    data-title="2025 더 메종"
                    data-date="2025.05.08-2025.05.11"
                    data-location="A홀"
                    data-link="https://www.hometabledeco.com/"
                    data-target="_blank"
                  >
                    <Link to="#" className="hero_slide_r_wrapReal">
                      <span className="hero_slide_r_ad blind">AD</span>
                      <img
                        className="hero_slide_img"
                        src={hero_img}
                        alt="히어로 슬라이드 이미지1"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* hero 오른쪽 여백 */}
              <div className="hero_slide_rightnull">
                <span className="hero_slide_barcode"></span>
                <div className="hero_slide_rightnull_text">EXHIBITION</div>
              </div>
            </div>

            {/* 페이지네이션 */}
            <div className="hero_slide_pagination swiper_pagination">
              <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Goslide1"></span>
              <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Goslide2"></span>
              <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Goslide3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
