import React from "react";
import "./Index.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { BsReplyFill } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";




const Index = () => {
  return (
    <section className="adver-head">
      <div
        className="all-adver-head px-lg-5 px-md-3 px-2 py-3 d-flex row gap-5"
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
                <BsReplyFill/> Digər vakansiyalar
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
          <div className="adver-head-bottom-right text-end">
            <div className="apply">
              <Link>
                {" "}
                <i class="fa-solid fa-location-arrow me-2"></i> Müraciət et
              </Link>
            </div>
            <div className="print d-flex align-items-center gap-2 my-4">
              <IoFlagOutline style={{fontSize:"17px"}}/> Şikayət et
              <div className="hr-div"></div>
              <LuPrinter style={{fontSize:"17px"}}/> Çap et
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
