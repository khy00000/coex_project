import React from "react";

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header_center">

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
            <li className="primary_menu_2">가이드
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
          <div className="header_promotion"></div>
          <div className="header_lang">
            <ul className="header_lang_box">
              <li>KOR</li>
              <li>ENG</li>
            </ul>
          </div>
          <div className="header_search_link"></div>
        </div>

      </div>
    </header>
  );
};

export default Header;
