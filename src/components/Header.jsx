/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header id="header" role="banner">
      <div className="wrap">
        {/* header logo */}
        <h1 className="logo_header">
          <a href="/" className="logo_header_link" aria-label="Home"></a>
          <span className="logo_header_text blind">
            <span>코엑스</span>
          </span>
        </h1>

        {/* primary menu */}
        <nav id="top_navi" className="primary_menu" aria-label="주요 메뉴">
          <ul className="primary_menu_box">
            <li className="primary_menu_1">행사</li>
            <li className="primary_menu_2">
              가이드
              <ul className="depth2">
                <li className="primary_menu_4">오시는 길</li>
                <li className="primary_menu_5">실내 길찾기</li>
                <li className="primary_menu_6">Coex VR</li>
                <li className="primary_menu_7">주차안내</li>
                <li className="primary_menu_8">편의시설</li>
                <li className="primary_menu_9">알림마당</li>
                <li className="primary_menu_10">고객 문의</li>
                <li className="primary_menu_11">뉴스</li>
              </ul>
            </li>
            <li className="primary_menu_3">하이라이트</li>
            <li className="primary_menu_pro_1">
              <span className="color">Business</span>
            </li>
          </ul>
        </nav>

        {/* header search */}
        <div className="header_search">
          <div className="header_promotion">마곡 컨벤션센터</div>

          <div className="header_lang">
            <ul className="header_lang_box">
              <li className="kor">KOR</li>
              <li className="eng">ENG</li>
            </ul>
          </div>

          {/* 우측 서치 아이콘 영역 */}
          <div className="header_search_link">
            <a
              href="#"
              className={`header_search_link_open ${active ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(true);
              }}
            >
              <span className="blind">검색창 열기</span>
            </a>
            <a
              href="#"
              className={`header_search_link_close ${active ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(false);
              }}
            >
              <span className="blind">검색창 닫기</span>
            </a>
          </div>

          {/* 서치창 */}
          <div className={`search_bar ${active ? "active" : ""}`}>
            <input
              id="search_bar_keyworld"
              className="search_bar_keyword"
              type="search"
            />
            <button type="button" class="search_bar_button">
              <span class="blind">검색</span>
            </button>
            <div className="keyword_area">
              <div className="title">추천 검색어</div>
              <div className="keyword_list">
                <ul className="keyword_list_box">
                  <li className="keyword_list_1">#코엑스 전시</li>
                  <li className="keyword_list_2">#행사</li>
                  <li className="keyword_list_3">#주차안내</li>
                  <li className="keyword_list_4">#편의시설</li>
                  <li className="keyword_list_5">#오시는 길</li>
                  <li className="keyword_list_6">#컨퍼런스</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
