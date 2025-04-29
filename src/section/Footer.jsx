import React from "react";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_wrap">
        <div className="footer_flex">
          <div className="footer_info">
            로고
          </div>
          <nav aria-label="하단 메뉴">
            <ul>{/* 하단 메뉴 리스트 */}</ul>
          </nav>
          <address>{/* 회사 주소 및 연락처 */}</address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
