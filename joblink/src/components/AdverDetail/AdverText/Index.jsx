import React, { useEffect, useState } from "react";
import "./Index.css";
import { IoWalletOutline } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";

const Index = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:7131/api/Advertisements/GetFalse/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
              {data.advertisementAbilities &&
                data.advertisementAbilities.map((item,index) => (
                  <div key={index} className="tag">
                    <FaTag className="tag-icon" /> {item.ability.name}
                  </div>
                ))}
            </div>
          </div>
          <div className="adver-description">
            <h1 className="m-0">Vakansiyanın təsviri</h1>
            <div className="descs d-flex p-3">
              <ul className="d-flex flex-column gap-2">
                {
                  data.jobDescriptions && data.jobDescriptions.map((item,index)=>(
                    <li key={index}>{item.description}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="adver-recruiments">
            <h1 className="m-0">Xüsusi tələblər</h1>
            <div className="recruiments d-flex flex-column gap-3 p-3">
              <ul className="d-flex flex-column gap-2">
                {
                  data.reqruiments && data.reqruiments.map((item,index)=>(
                    <li key={index}>{item.text}</li>
                  ))
                }
              </ul>
              <div className="apply-email">
                <p>
                  {" "}
                  Vakansiya ilə bağlı müraciət üçün CV formasını e-mail
                  vasitəsilə mövzu yerinə 
                  <span style={{ fontWeight: "bold" ,margin: "0 5px"}}>
                    “{data.title}”
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
                  <p className="m-0">{data.salary}</p>
                </div>
              </div>
              <hr />
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <AiOutlineHome className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>Kateqoriya</span>
                  <p className="m-0">{data.category && data.category.name}</p>
                </div>
              </div>
              <hr />
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <VscWorkspaceTrusted className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>İş stajı(il)</span>
                  <p className="m-0">{data.experience}</p>
                </div>
              </div>
              <hr />
              <div className="about-adver-box d-flex align-items-center">
                <div className="left-adver-about">
                  <IoBookOutline className="about-icon" />
                </div>
                <div className="right-adver-about mx-3">
                  <span>Tələb olunan təhsil</span>
                  <p className="m-0">{
                  data.education === "Middle" ? "Orta Təhsil" : data.education === "bachelor" ? "Bakalavr" : "Magistr"
                  }</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="adver-share">
            <div className="top-share d-flex gap-3 col-lg-12">
              <div className="left-top-share share-box col-lg-6">
                <span>Günlük</span>
                <p>{data.advertisementCount && data.advertisementCount.day}</p>
              </div>
              <div className="right-top-share share-box col-lg-6">
                <span>Həftəlik</span>
                <p>{data.advertisementCount && data.advertisementCount.week}</p>
              </div>
            </div>
            <div className="bottom-share share-box">
              <span>Aylıq</span>
              <p>{data.advertisementCount && data.advertisementCount.month}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
