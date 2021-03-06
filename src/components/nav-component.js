import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavComponent = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark sticky-top nav-bg-custom"
      style={{ zIndex: "10" }}
    >
      <div className="container-fluid">
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {url === "/myPortfolio_React" ? (
              <li className="nav-item">
                <Link className="nav-link active" to="/myPortfolio_React">
                  <i className="twicon-taipei101"></i>ホームページ
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/myPortfolio_React">
                  <i className="twicon-taipei101"></i>ホームページ
                </Link>
              </li>
            )}
            {url === "/myPortfolio_React/certification" ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/myPortfolio_React/certification"
                >
                  <i className="twicon-balloon"></i> 資格
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/myPortfolio_React/certification"
                >
                  <i className="twicon-balloon"></i> 資格
                </Link>
              </li>
            )}
            {url === "/myPortfolio_React/contact" ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/myPortfolio_React/contact"
                >
                  <i className="twicon-l-nh-insurance"></i> 連絡情報
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/myPortfolio_React/contact">
                  <i className="twicon-l-nh-insurance"></i> 連絡情報
                </Link>
              </li>
            )}
            {url === "/myPortfolio_React/practice" ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/myPortfolio_React/practice"
                >
                  <i className="twicon-san-domingo"></i> 練習
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/myPortfolio_React/practice">
                  <i className="twicon-san-domingo"></i> 練習
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
