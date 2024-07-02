import React, { useEffect, useState } from "react";
import { IoBag } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { BsBuilding } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { BsEnvelopeCheck } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMoon } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme === "true") {
      applyDarkMode();
      setIsDark(true);
    }
  }, []);


  const handleClick = (event) => {
    if (event.currentTarget.id === "img-link") {
      setActive("1");
    } else if (event.currentTarget.id === "5") {
      setActive("");
    } else {
      setActive(event.currentTarget.id);
    }
  };

  const applyDarkMode = () => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      * {
        background-color: #333 !important;
        color: white !important;
      }
    `;
    document.head.appendChild(styleElement);
  };
  
  const removeDarkMode = () => {
    const styleElements = document.head.querySelectorAll("style");
    styleElements.forEach((styleElement) => {
      if (styleElement.innerHTML.includes("background-color: #333")) {
        document.head.removeChild(styleElement);
      }
    });
  };

  const toggleDark = () => {
    if (!isDark) {
      applyDarkMode();
      localStorage.setItem("isDark", "true");
    } else {
      removeDarkMode();
      localStorage.setItem("isDark", "false");
    }
    setIsDark(!isDark);
  };


  


  return (
    <header className={`py-lg-2 px-lg-5 px-md-3 py-md-1 px-2 py-2 ${isDark ? "dark" : ""}`}>
      <div className="all-header d-flex align-items-center justify-content-between col-lg-12">
        <div className="left-header d-flex col-lg-6">
          <Link to="/" id="img-link" className="w-25" onClick={handleClick}>
            <img
              src="https://classic.jobsearch.az/simple/images/jobsearch.svg"
              alt=""
            />
          </Link>
          <div className="menu-header">
            <ul className="d-flex gap-2">
              <li>
                <Link
                  to="/"
                  key={1}
                  id={"1"}
                  className={`d-flex align-items-center gap-1 ${
                    active === "1" ? "active-button" : ""
                  }`}
                  onClick={handleClick}
                >
                  <IoBag className="icons" /> Elanlar
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  key={2}
                  id={"2"}
                  className={`d-flex align-items-center gap-1 ${
                    active === "2" ? "active-button" : ""
                  }`}
                  onClick={handleClick}
                >
                  <MdCategory className="icons" /> Kategoriyalar
                </Link>
              </li>
              <li>
                <Link
                  to="/industry"
                  key={3}
                  id={"3"}
                  className={`d-flex align-items-center gap-1 ${
                    active === "3" ? "active-button" : ""
                  }`}
                  onClick={handleClick}
                >
                  <GrStorage className="icons" /> Sənaye
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  key={4}
                  id={"4"}
                  className={`d-flex align-items-center gap-1 ${
                    active === "4" ? "active-button" : ""
                  }`}
                  onClick={handleClick}
                >
                  <BsBuilding className="icons" /> Şirkətlər
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-header d-flex col-lg-6 justify-content-end">
          <div className="service-about-header d-flex">
            <ul className="d-flex gap-3">
              <li>
                <Link to="/about" key={5} id={"5"} onClick={handleClick}>
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link to="/services" key={5} id={"5"} onClick={handleClick}>
                  Xidmətlər
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-wishlist">
            <ul className="d-flex align-items-center right-header-ul gap-2">
              <li>
                <Link
                  to="/contact"
                  key={5}
                  id={"5"}
                  className="connect"
                  onClick={handleClick}
                >
                  Əlaqə
                </Link>
              </li>
              <li>
                <Link to="/wishlist" key={5} id={"5"} onClick={handleClick}>
                  <FaHeart className="right-icons" />
                </Link>
              </li>
              <li>
                <Link key={5} id={"5"} onClick={handleClick}>
                  <BsEnvelopeCheck className="right-icons" />
                </Link>
              </li>
              <li
                style={{
                  border: "1px solid #a3a3a3",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                <select
                  name=""
                  id=""
                  style={{ border: "none", color: "#838383", outline: "none" }}
                >
                  <option value="1">AZ</option>
                  <option value="1">EN</option>
                  <option value="2">RU</option>
                </select>
              </li>
              <li>
                <Link onClick={toggleDark}>
                  <FaMoon className="right-icons" />
                </Link>
              </li>
              <li>
                <Link>
                  <GoLinkExternal className="right-icons" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-header-mobile col-lg-6">
          <div className="burger-mobile">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
