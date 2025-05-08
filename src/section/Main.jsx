import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Guide from "../components/Guide";
import Event from "../components/Event";

import eventlistData from "../data/eventlistData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Main = () => {
  //부킹 데이터만 필터
  const bookingitem = eventlistData.filter((item) => item.booking === true);

  return (
    <main id="main" role="banner">
      <div className="main_wrap">
        <Hero />
        <Guide />
        <Event />
      </div>

      <div className="main_ticket">
        <div className="main_ticket_wrap">
          <h3>
            <span className="ticket_title">티켓 오픈</span>
            <span className="ticket_title_num">{bookingitem.length}</span>
          </h3>

          <div className="ticket_con">
            <div className="ticket_navi">
              <div className="ticket_navi_wrap">
                <button className="ticket_prev" aria-label="이전 슬라이드"></button>
                <button className="ticket_next" aria-label="다음 슬라이드"></button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ el: ".ticket_pagination", clickable: true }}
              navigation={{ nextEl: ".ticket_next", prevEl: ".ticket_prev" }}
              loop={true}
              slidesPerView={3}
              centeredSlides={true}
              className="ticket_swiper"
            >
              {bookingitem.map((item, index) => (
                <SwiperSlide className="ticket_con_wrap" key={index}>
                  <div className="ticket_left">
                    <span className="left_bg" />
                  </div>

                  {/* 티켓 정보 영역 */}
                  <div className="ticket_center_wrap">
                    <div className="ticket_center">
                      <div className="center_img">
                        <img
                          src={item.img}
                          alt={`티켓 리스트 이미지 ${item.id}`}
                        />
                      </div>

                      {/* 티켓 정보 오른쪽 영역 */}
                      <div className="center_right">
                        <div className="center_right_title">{item.title}</div>
                        <div className="center_right_list">
                          <div className="list_info">
                            <div className="list_info_title">행사 개최</div>
                            <div className="list_info_Dday">D-27</div>
                          </div>
                          <div className="list_info">
                            <div className="list_info_title">전시 일정</div>
                            <div className="list_info_day">{item.date}</div>
                          </div>
                          <div className="list_info">
                            <div className="list_info_title">장소</div>
                            <div className="list_info_day">{item.location}</div>
                          </div>
                        </div>
                        <div className="center_right_link">
                          <div className="link_wrap1">
                            <Link className="center_link" to={item.link}>
                              <span className="center_link_text">홈페이지</span>
                            </Link>
                          </div>
                          <div className="link_wrap2">
                            <Link
                              className="center_booklink"
                              to={item.bookinglink}
                            >
                              <span className="center_link_text">예약하기</span>
                            </Link>
                          </div>
                        </div>
                        <div className="ticket_bc"></div>
                      </div>
                    </div>
                  </div>

                  <div className="ticket_right">
                    <span className="right_bg" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 커스텀페이지 네이션 */}
            <div className="ticket_pagenation_wrap">
              <div className="ticket_pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;