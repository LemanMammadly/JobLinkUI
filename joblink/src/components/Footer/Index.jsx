import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <footer className="py-lg-2 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-footer d-flex align-items-center col-lg-12">
        <div className="all-left-footer d-flex align-items-center col-lg-6">
          <span className="left-footer-text">© JobSearch.az 2023—2024</span>
          <ul>
            <li>
              <Link>Haqqımızda</Link>
            </li>
            <li>
              <Link>Xidmətlər</Link>
            </li>
            <li>
              <Link>Əlaqə</Link>
            </li>
          </ul>
        </div>
        <div className="all-right-footer text-end col-lg-6">
          Site by
          <img
            src="https://petihtiyac.com/Data/EditorFiles/blog/sarman2.jpg"
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
            alt=""
            className="mx-2"
          />
          Laman Mammadly Studio
        </div>
      </div>
    </footer>
  );
};

export default Index;
