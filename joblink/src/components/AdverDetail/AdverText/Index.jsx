import React from "react";
import "./Index.css";
import { IoWalletOutline } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";

const Index = () => {
  return (
    <section className="adver-text px-lg-5 px-md-3 py-5">
      <div className="all-adver-text col-lg-12 d-flex justify-content-between gap-3">
        <div className="left-adver-text col-lg-8 d-flex flex-column gap-4">
          <div className="adver-details">
            <h1 className="m-0">Vakansiyanın detalları</h1>
            <div className="busy-time d-flex gap-4 px-3 py-2">
              <span className="m-0">Məşğuliyyət :</span>
              <p className="m-0">Tam iş günü</p>
            </div>
            <div
              className="tags-adver d-flex flex-wrap gap-3 px-3 py-2"
              style={{ backgroundColor: "#F5F6F7" }}
            >
              <div className="tag">
                <FaTag className="tag-icon" /> OOP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> PHP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> JS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> HTML
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> CSS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> OOP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> PHP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> JS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> HTML
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> CSS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> OOP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> PHP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> JS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> HTML
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> CSS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> OOP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> PHP
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> JS
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> HTML
              </div>
              <div className="tag">
                <FaTag className="tag-icon" /> CSS
              </div>
            </div>
          </div>
          <div className="adver-description">
            <h1 className="m-0">Vakansiyanın təsviri</h1>
            <div className="descs d-flex p-3">
              <ul className="d-flex flex-column gap-2">
                <li>yeni veb-layihələr üzərində işləməsi</li>
                <li>mövcud veb-layihələrin inkişaf etdirilməsi</li>
                <li>komanda üzvü kimi veb-layihələr üzərində işləməsi</li>
                <li>
                  layihələri planlaması, inkişaf etdirməsi, deploy etməsi və
                  baxım
                </li>
                <li>
                  məhsulun biznes məntiqinin və back-end sisteminin dizayn
                  olunması və proqramlaşdırılması
                </li>
                <li>yeni veb-layihələr üzərində işləməsi</li>
                <li>mövcud veb-layihələrin inkişaf etdirilməsi</li>
                <li>komanda üzvü kimi veb-layihələr üzərində işləməsi</li>
                <li>
                  layihələri planlaması, inkişaf etdirməsi, deploy etməsi və
                  baxım
                </li>
                <li>
                  məhsulun biznes məntiqinin və back-end sisteminin dizayn
                  olunması və proqramlaşdırılması
                </li>
                <li>yeni veb-layihələr üzərində işləməsi</li>
                <li>mövcud veb-layihələrin inkişaf etdirilməsi</li>
                <li>komanda üzvü kimi veb-layihələr üzərində işləməsi</li>
                <li>
                  layihələri planlaması, inkişaf etdirməsi, deploy etməsi və
                  baxım
                </li>
                <li>
                  məhsulun biznes məntiqinin və back-end sisteminin dizayn
                  olunması və proqramlaşdırılması
                </li>
              </ul>
            </div>
          </div>
          <div className="adver-recruiments">
            <h1 className="m-0">Xüsusi tələblər</h1>
            <div className="recruiments d-flex flex-column gap-3 p-3">
              <ul className="d-flex flex-column gap-2">
                <li>yeni veb-layihələr üzərində işləməsi</li>
                <li>mövcud veb-layihələrin inkişaf etdirilməsi</li>
                <li>komanda üzvü kimi veb-layihələr üzərində işləməsi</li>
                <li>
                  layihələri planlaması, inkişaf etdirməsi, deploy etməsi və
                  baxım
                </li>
                <li>
                  məhsulun biznes məntiqinin və back-end sisteminin dizayn
                  olunması və proqramlaşdırılması
                </li>
                <li>yeni veb-layihələr üzərində işləməsi</li>
                <li>mövcud veb-layihələrin inkişaf etdirilməsi</li>
                <li>komanda üzvü kimi veb-layihələr üzərində işləməsi</li>
                <li>
                  layihələri planlaması, inkişaf etdirməsi, deploy etməsi və
                  baxım
                </li>
                <li>
                  məhsulun biznes məntiqinin və back-end sisteminin dizayn
                  olunması və proqramlaşdırılması
                </li>
                <li>yeni veb-layihələr üzərində işləməsi</li>
                <li>komanda üzvü kimi veb-layihələr üzərində işləməsi</li>
              </ul>
              <div className="apply-email">
                <p>
                  {" "}
                  Vakansiya ilə bağlı müraciət üçün CV formasını e-mail
                  vasitəsilə mövzu yerinə
                  <span style={{ fontWeight: "bold" }}>
                    “Texniki ofis mühəndisi”
                  </span>{" "}
                  üzrə yazmaqla elektron ünvanına göndərməyiniz xahiş olunur.
                  Yalnız vakansiya tələblərinə uyğun namizədlərlə əlaqə
                  saxlanılacaqdır.
                </p>
              </div>
              {/* <div className="apply-email">
                <p>
                  {" "}
                  Vakansiyaya 
                  <span style={{fontWeight:"bold"}}>
                    “TuranBank ASC-nin “İşə Qəbul Portalı”nda qeydiyyatdan keçərək
                  </span>{" "}
                   müraciət edə bilərsiniz. 
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="right-adver-text d-flex flex-column gap-4 col-lg-4">
          <div className="about-adver">
            <h1 className="m-0">VAKANSİYA HAQQINDA</h1>
            <div className="about-adver-boxes">
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <IoWalletOutline className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>Əmək haqqı</span>
                  <p className="m-0">Razılaşma yolu ilə</p>
                </div>
              </div>
              <hr />
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <AiOutlineHome className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>Kateqoriya</span>
                  <p className="m-0">Development (Proqramlaşdırma)</p>
                </div>
              </div>
              <hr />
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <VscWorkspaceTrusted className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>İş stajı(il)</span>
                  <p className="m-0">3-5 il</p>
                </div>
              </div>
              <hr />
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <IoBookOutline className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>Tələb olunan təhsil</span>
                  <p className="m-0">Ali təhsil</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="adver-share">
            <div className="top-share d-flex gap-3 col-lg-12">
              <div className="left-top-share share-box col-lg-6">
                <span>Günlük</span>
                <p>104</p>
              </div>
              <div className="right-top-share share-box col-lg-6">
                <span>Həftəlik</span>
                <p>233</p>
              </div>
            </div>
            <div className="bottom-share share-box">
              <span>Aylıq</span>
              <p>1627</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
