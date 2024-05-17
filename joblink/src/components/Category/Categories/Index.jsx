import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);

  async function GetData() {
    try {
      let res = await axios.get("https://localhost:7131/api/Categories/Get");
      let data = await res.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <section className="categories py-lg-3 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-categories col-lg-12">
        {data.map((datas) => (
          <div className="category-box d-flex align-items-center justify-content-between ">
            <div className="left-category-box d-flex align-items-center gap-2">
              <div className="category-logo">
                <img
                  className="logo"
                  src={datas.logo}
                  alt=""
                />
              </div>
              <div className="category-name">{datas.name}</div>
            </div>
            <div className="category-count">{datas.advertisements.length} elan</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
