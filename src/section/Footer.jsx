import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footersns = [
    "인스타그램",
    "유투브",
    "페이스북",
    "링크드인",
    "엑스",
    "네이버 블로그",
  ];

  const footerinfo = [
    "안전경영",
    "친환경",
    "개인정보처리방침",
    "이메일무단수집거부",
    "무역센터 신문고",
    "사이트맵",
  ];

  const familysite = [
    "KITA",
    "WTC Seoul",
    "KTNET",
    "CALT",
    "CAAM",
    "Coex VINA",
    "CoexMall",
  ];

  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_wrap">
        <div className="footer">
          <div className="footermain">
            <div className="footermaininfo">
              <div className="footerinfo_logo">
                <span className="footerinfo_logo_text">코엑스</span>
              </div>
              <address className="footeraddress">
                <div className="address_item">
                  서울특별시 강남구 영동대로 513
                </div>
                <div className="address_item">(삼성동, 코엑스) 06164</div>
              </address>
              <Link to="#">대표번호 02-6000-0114</Link>
            </div>
          </div>

          <div className="footernav">
            <ul className="footernavlist">
              <li className="footernavlist_item">
                <Link to="#">행사일정</Link>
              </li>
              <li className="footernavlist_item">
                <Link to="#">오시는길</Link>
              </li>
              <li className="footernavlist_item">
                <Link to="#">주차안내</Link>
              </li>
              <li className="footernavlist_item">
                <Link to="#">편의시설</Link>
              </li>
            </ul>
          </div>

          <div className="footerlink">
            <div className="footerlinklist">
              <ul className="footerlinklist_wrap">
                <li className="footerlinklist_item">
                  <Link to="#">Coex 소개</Link>
                </li>
                <li className="footerlinklist_item">
                  <Link to="#">Cyber Coex</Link>
                </li>
                <li className="footerlinklist_item">
                  <Link to="#">Coex MICE Cluster</Link>
                </li>
              </ul>
            </div>

            <div className="footerlinksns">
              <ul className="footerlinksns_wrap">
                <li className="footerlinksns_item">
                  {footersns.map((sns, index) => (
                    <Link to="#" className="footersns_link">
                      <span className="snstext">{sns}</span>
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          <div className="footeinfo">
            <ul className="footerinfo_list">
              <li className="footerinfo_item">
                {footerinfo.map((info, index) => (
                  <Link to="#" className="footerinfo_link">
                    {info}
                  </Link>
                ))}
              </li>
            </ul>
            <div className="family_site">
              <ul className="family_list">
                <li className="family_list_item">
                  {familysite.map((family, index) => (
                    <Link to="#" className="family_list_link">
                      {family}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          ⒸCOPYRIGHT 2023 Coex. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
