import React, { useEffect, useState } from "react";
import "./Index.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { BsReplyFill } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import ComplaintModal from "../ComplaintModal/Index"
import { FaRegBuilding } from "react-icons/fa";
import axios from 'axios';

const Index = () => {
  const [data,setData]=useState();
  const [isApplyLinkVisible, setIsApplyLinkVisible] = useState(true);

  const handleClick = (e) => {
    setIsApplyLinkVisible(false);
  };

  const closeClick = () => {
    setIsApplyLinkVisible(true);
  };

  const copy = () => {
    var copyText = document.querySelector(".mail-link").innerText;
    navigator.clipboard.writeText(copyText);
    document.querySelector(".mail-link-info").innerText =
      "E-mail ünvanı kopyalandı";
  };

  useEffect(()=>{
    axios.get(
      `https://localhost:7131/api/Advertisements/Get`
    )
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <section className="adver-head">
      <div
        className="all-adver-head px-lg-5 px-md-3  py-3 d-flex flex-column justify-content-between gap-5"
        style={{ backgroundColor: "#FBFBFD" }}
      >
        <div className="adver-head-top d-flex align-items-center justify-content-between">
          <div className="comp-name d-flex align-items-center gap-1">
            <img
              style={{ width: "30px", borderRadius: "50%" }}
              src="https://storage.jobsearch.az/storage/pages/2227/xalqbank.svg"
              alt=""
            />
            <Link className="m-0">Zaman Broker</Link>
            <div className="other-adver mx-4">
              <Link className="d-flex align-items-center gap-1">
                {" "}
                <BsReplyFill /> Digər vakansiyalar
              </Link>
            </div>
            <div className="company-about">
              <Link className="d-flex align-items-center gap-1">
                {" "}
                <FaRegBuilding /> Şirkət haqqında
              </Link>
            </div>
          </div>
          <div className="view-wish d-flex align-items-center gap-2">
            <IoEyeOutline style={{ color: "rgb(111, 117, 126)" }} />
            <span>372</span>
            <div className="hr-div"></div>
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
          </div>
        </div>
        <div className="adver-head-bottom d-flex align-items-center justify-content-between">
          <div className="adver-head-bottom-left">
            <div className="adver-title d-flex align-items-center">
              <h1>Insurance Service Representative</h1>
              <span className="new">YENİ</span>
            </div>
            <div className="deadline-cat d-flex align-items-center gap-4 my-3">
              <div className="deadline">
                <FaRegClock /> Deadline 19 Mart 2024
              </div>
              <div className="category-adver">
                <Link>Maliyyə Xidmətləri</Link>
              </div>
            </div>
          </div>
          <div className="right-adver-head">
            <div className="adver-head-bottom-right text-end">
              <div className="apply">
                {isApplyLinkVisible ? (
                  <Link className="apply-link" onClick={handleClick}>
                    {" "}
                    <i class="fa-solid fa-location-arrow me-2"></i> Müraciət et
                  </Link>
                ) : (
                  <Link onClick={copy} className="mail-link">
                    {" "}
                    <IoMdClose onClick={closeClick} className="me-1" />{" "}
                    support@smartit.az
                  </Link>
                )}

                {isApplyLinkVisible ? (
                  ""
                ) : (
                  <div className="mail-link-info">
                    <p>
                      Müraciət üçün aşağıdakı email ünvanı köçürmək lazımdır.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="print d-flex align-items-center gap-4 my-4">
              <span
                style={{ color: "rgb(111, 117, 126);", fontSize: "13px" }}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <IoFlagOutline className="me-1" style={{ fontSize: "17px" }} />{" "}
                Şikayət et
              </span>
              <div className="hr-div"></div>
              <span onClick={()=>window.print()} style={{ color: "rgb(111, 117, 126);", fontSize: "13px",cursor:"pointer" }}>
                <LuPrinter className="me-1" style={{ fontSize: "17px" }} /> Çap
                et
              </span>
            </div>
          </div>
        </div>
      </div>
      <ComplaintModal/>
    </section>
  );
};

export default Index;
