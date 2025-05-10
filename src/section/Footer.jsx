import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footersns, footerinfo, familysite } from "../data/footerData";

const Footer = () => {
  // 패밀리 사이트 오픈
  const [active, setActive] = useState(false);

  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_wrap">
        <div className="footer">
          <div className="footermain">
            <div className="footermaininfo">
              <div className="footerinfo_logo">
                <span className="footerinfo_logo_text blind">코엑스</span>
              </div>

              <address className="footeraddress">
                <div className="address_item">
                  서울특별시 강남구 영동대로 513
                </div>
                <div className="address_item">(삼성동, 코엑스) 06164</div>
              </address>
            </div>

            <Link className="tel" to="#">
              대표번호 02-6000-0114
            </Link>
          </div>

          <div className="footernav">
            <ul className="footernavlist">
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  행사일정
                </Link>
              </li>
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  오시는길
                </Link>
              </li>
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  주차안내
                </Link>
              </li>
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  편의시설
                </Link>
              </li>
            </ul>
          </div>

          <div className="footerlink">
            <ul className="footerlinklist">
              <li className="footerlinklist_item">
                <Link to="#" className="footerlink_link">
                  Coex 소개
                </Link>
              </li>
              <li className="footerlinklist_item">
                <Link to="#" className="footerlink_link">
                  Cyber Coex
                </Link>
              </li>
              <li className="footerlinklist_item">
                <Link to="#" className="footerlink_link">
                  Coex MICE Cluster
                </Link>
              </li>
            </ul>

            <ul className="footerlinksns">
              <li className="footerlinksns_item">
                {footersns.map((sns, index) => (
                  <Link to="#" className="footersns_link">
                    <span className="snstext blind">{sns}</span>
                  </Link>
                ))}
              </li>
            </ul>
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
              {/* 패밀리 사이트 버튼 */}
              <button
                className={`family_list_link ${active ? "active" : ""}`}
                onClick={() => setActive(!active)}
              >
                Family Site
              </button>
              {/* 패밀리 메뉴 */}
              <ul className="family_site_item_box">
                {familysite.map((family, index) => (
                  <li className="family_site_item">
                    <Link to="#" className="family_site_item_link">
                      {family}
                    </Link>
                  </li>
                ))}
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
