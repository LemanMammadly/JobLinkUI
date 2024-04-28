import React, { useEffect, useRef } from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  const tabsRef = useRef(null);

  useEffect(() => {
    const tabs = tabsRef.current;
    const tabHeader = tabs.querySelector(".tab-header");
    const tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
    const tabBody = tabs.querySelector(".tab-body");
    const tabBodyElements = tabs.querySelectorAll(".tab-body > div");
    const tabIndicator = tabs.querySelector(".tab-indicator > div");

    for (let i = 0; i < tabHeaderElements.length; i++) {
      tabHeaderElements[i].addEventListener("click", function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderElements[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElements[i].classList.add("active");
        tabIndicator.style.left = `${i * 25}%`;
      });
    }

    return () => {
      for (let i = 0; i < tabHeaderElements.length; i++) {
        tabHeaderElements[i].removeEventListener("click", function () {});
      }
    };
  }, []);

  return (
    <section className="company-detail py-lg-2 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-company-detail d-flex align-items-start gap-5">
        <div className="left-company-detail col-lg-5">
          <div className="top-company-detail d-flex align-items-center gap-3">
            <img
              src="https://storage.jobsearch.az/storage/pages/3918/expressbank.png"
              alt=""
            />
            <div className="top-company-category">
              <h1>Express Bank</h1>
              <Link>Banklar,</Link> <Link>Maliyye Xidmetleri</Link>
            </div>
          </div>
          <hr style={{ color: "#dcdfe2" }} />
          <div className="bottom-company-detail">
            <div className="address">
              <h4>Address</h4>
              <p>
                Bakı, Azərbaycan, AZ1052, Atatürk pr., Yusif Vəzir Çəmənzəminli
                küç., 134 C
              </p>
            </div>
            <div className="phone">
              <h4>Phone number</h4>
              <p>(+994 12) 132</p>
            </div>
            <div className="email">
              <h4>Email</h4>
              <p>leman@gmail.com</p>
            </div>
            <div className="website">
              <h4>Website</h4>
              <Link>https://www.expressbank.az</Link>
            </div>
          </div>
        </div>
        <div className="right-company-detail col-lg-6" ref={tabsRef}>
          <div class="tabs">
            <div class="tab-header">
              <div class="active title">Şirkət haqqında</div>
              <div className="title">Son iş elanları</div>
            </div>
            <div class="tab-indicator">
              <div></div>
            </div>
            <div class="tab-body tab-content">
              <div class="active">
                <h2>Şirkət haqqında</h2>
                <p>
                  Hazırda mövcud banklar içində ilk kommersiya bankı olan
                  “Expressbank” ASC 21 iyun 1989-cu il tarixində təsis olunmuş
                  və uzun müddət “Azərnəqliyyatbank” adı altında fəaliyyət
                  göstərmişdir. Bank öz fəaliyyətini Azərbaycan Respublikasının
                  Mərkəzi Bankı tərəfindən 30 dekabr 1992–ci il tarixində
                  verilmiş lisenziya əsasında həyata keçirir. Bankın
                  Səhmdarlarının Ümumi Yığıncağının 01 fevral 2010-cu il tarixli
                  qərarı ilə “Azərnəqliyyatbank” ASC-nin adı dəyişdirilərək
                  “Expressbank” ASC adlandırılmış və Nizamnaməyə müvafiq
                  dəyişiklik 04 mart 2010-cu il tarixində dövlət qeydiyyatına
                  alınmışdır.
                </p>
              </div>

              <div className="otherVacancies">
                <table class="table table-hover">
                  <thead>
                    <tr className="other-table" style={{ border: "1px solid #fff" }}>
                      <th scope="col">Elan</th>
                      <th
                        scope="col"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Dərc olunub
                      </th>
                      <th
                        scope="col"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Son tarix
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="other-table">
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="adver-name"
                      >
                        <svg
                          className="me-2 heart-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="15"
                          height="15"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            fill="#fff"
                            stroke="currentColor"
                            strokeWidth={2}
                            d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z"
                          />
                        </svg>
                        Insurance Service Representative
                        <span className="new">YENİ</span>
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="adver-date"
                      >
                        16 fevral
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="adver-date"
                      >
                        16 mart
                      </td>
                    </tr>
                    <tr className="other-table">
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="adver-name"
                      >
                        <svg
                          className="me-2 heart-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="15"
                          height="15"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            fill="#fff"
                            stroke="currentColor"
                            strokeWidth={2}
                            d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z"
                          />
                        </svg>
                        Insurance Service Representative
                        <span className="new">YENİ</span>
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="adver-date"
                      >
                        16 fevral
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        className="adver-date"
                      >
                        16 mart
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
