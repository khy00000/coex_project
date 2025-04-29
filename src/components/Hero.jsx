import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div class="hero">
      <div class="hero_slide_box">
        <div class="hero_slide">
          {/* hero 슬라이드 왼쪽 텍스트 영역 */}
          <div class="hero_slide_left">
            <div class="hero_sub_title">What’s On</div>
            <h2 class="hero_title">
              <a href="/" class="hero_title_slide">2025 더 메종</a>
            </h2>

            <div class="here_title_info">
              <div class="here_title_info_date">2025.05.08-2025.05.11</div>
              <div class="here_title_info_location">A홀</div>
            </div>

            <Link to="https://www.hometabledeco.com" class="here_title_arrow" target="_blank"></Link>
          </div>

          {/* hero 이미지 슬라이드 영역 */}
          <div class="hero_slide_right">
            <div class="hero_slide_r_box">
              <div class="hero_slide_r_con swiper-container">
                <div class="hero_slide_r_wrapper swiper-wrapper">
                  {/* hero 이미지 슬라이드 박스 */}
                  <div
                    id="hero_slide_img"
                    class="hero_slide_r_slide swiper-slide"
                    data-category="EXHIBITION"
                    data-sub="What’s On"
                    data-title="2025 더 메종"
                    data-date="2025.05.08-2025.05.11"
                    data-location="A홀"
                    data-link="https://www.hometabledeco.com/"
                    data-target="_blank"
                  >
                    <Link to="#" class="hero_slide_r_wrapReal">
                      <span class="hero_slide_r_ad">AD</span>
                      <img
                        class="hero_slide_img"
                        src=""
                        alt="히어로 슬라이드 이미지1"
                      />
                    </Link>
                  </div>

                  <div
                    id="hero_slide_img"
                    class="hero_slide_r_slide swiper-slide"
                    data-category=""
                    data-sub=""
                    data-title=""
                    data-date=""
                    data-location=""
                    data-link=""
                    data-target="_blank"
                  >
                    <Link to="#" class="hero_slide_r_wrapReal">
                      <span class="hero_slide_r_ad">AD</span>
                      <img
                        class="hero_slide_img"
                        src=""
                        alt="히어로 슬라이드 이미지2"
                      />
                    </Link>
                  </div>

                  <div
                    id="hero_slide_img"
                    class="hero_slide_r_slide swiper-slide"
                    data-category=""
                    data-sub=""
                    data-title=""
                    data-date=""
                    data-location=""
                    data-link=""
                    data-target="_blank"
                  >
                    <Link href="#" class="hero_slide_r_wrapReal">
                      <span class="hero_slide_r_ad">AD</span>
                      <img
                        class="hero_slide_img"
                        src=""
                        alt="히어로 슬라이드 이미지3"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* hero 오른쪽 여백 */}
              <div class="hero_slide_rightnull">
                <div class="hero_slide_rightnull_text"></div>
              </div>
            </div>

            {/* 페이지네이션 */}
            <div class="hero_slide_pagination swiper_pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
