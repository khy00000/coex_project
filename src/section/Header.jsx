import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //헤더 우측 서치 영역 액티브
  const [active, setActive] = useState(false);

  //헤더 스코롤 효과
  const [hidden, setHidden] = useState(false);
  const [lastscroll, setLastcroll] = useState(0);

  useEffect(() => {
    const onscroll = () => {
      const currentscroll = window.scrollY;
      if (Math.abs(currentscroll - lastscroll) > 30) {
        setHidden(currentscroll > lastscroll);
        setLastcroll(currentscroll);
      }
    };
    window.addEventListener('scroll', onscroll);
    return () => window.removeEventListener('scroll', onscroll);}, [lastscroll]);

  return (
    <header id="header" className={`header ${hidden ? 'hide' : ''}`}>
      <div className="header_wrap">
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
            <li className="primary_menu_1">
              <Link to="/" className="depth1">
                행사
              </Link>
            </li>

            {/* 2depth */}
            <li className="primary_menu_2">
              <Link to="/" className="depth1">
                가이드
              </Link>
              <ul className="depth2_menu">
                <li className="primary_menu_4 menu">
                  <Link to="/">오시는 길</Link>
                </li>
                <li className="primary_menu_5 menu">
                  <Link to="/">실내 길찾기</Link>
                </li>
                <li className="primary_menu_6 menu">
                  <Link to="/">Coex VR</Link>
                </li>
                <li className="primary_menu_7 menu">
                  <Link to="/">주차안내</Link>
                </li>
                <li className="primary_menu_8 menu">
                  <Link to="/">편의시설</Link>
                </li>
                <li className="primary_menu_9 menu">
                  <Link to="/">알림마당</Link>
                </li>
                <li className="primary_menu_10 menu">
                  <Link to="/">고객 문의</Link>
                </li>
                <li className="primary_menu_11 menu">
                  <Link to="/">뉴스</Link>
                </li>
              </ul>
            </li>
            <li className="primary_menu_3">
              <Link to="/" className="depth1">
                하이라이트
              </Link>
            </li>
            <li className="primary_menu_pro_1">
              <Link to="/" className="depth1_pro">
                <span className="box">Business</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* header search */}
        <div className="header_search">
          <div className="header_promotion">
            <Link to="/">마곡 컨벤션센터</Link>
          </div>

          <div className="header_lang">
            <ul className="header_lang_box">
              <li className="kor current">
                <a href="/">KOR</a>
              </li>
              <li className="eng">
                <a href="#">ENG</a>
              </li>
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
