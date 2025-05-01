import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import heroData from "../data/heroData";
import { useRef } from "react";

export const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <div className="hero">
      {/* 히어로 스와이퍼 */}
      <Swiper
        className="hero_slide_box"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          window.heroSwiper = swiper;
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        navigation
        autoplay={{ delay: 4000 }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id} className="hero_slide">
            {/* hero 슬라이드 왼쪽 텍스트 영역 */}
            <div className="hero_slide_left">
              <div className="hero_sub_title">{item.sub}</div>
              <h2 className="hero_title">
                <Link
                  to={item.link}
                  className="hero_title_slide"
                  target="_blank"
                >
                  {item.title}
                </Link>
              </h2>

              <div className="here_title_info">
                <div className="here_title_info_date">{item.date}</div>
                <div className="here_title_info_location">{item.location}</div>
              </div>

              <Link
                to={item.link}
                className="here_title_arrow"
                target="_blank"
              ></Link>
            </div>

            {/* hero 이미지 슬라이드 영역 */}
            <div className="hero_slide_right">
              {/* hero 이미지 슬라이드 박스 */}
              <Link to={item.link} className="hero_slide_r_box">
                <span className="hero_slide_r_ad blind">AD</span>
                <img
                  className="hero_slide_img"
                  src={item.img}
                  alt={`슬라이드 이미지 ${item.id}`}
                />
              </Link>

              {/* hero 오른쪽 여백 */}
              <div className="hero_slide_rightnull">
                <span className="hero_slide_barcode"></span>
                <div className="hero_slide_rightnull_text">{item.category}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 페이지네이션 커스텀 */}
      <div className="custom-pagination-wrapper">
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};
