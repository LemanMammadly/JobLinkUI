import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);

  async function GetData() {
    try {
      let res = await axios.get("https://localhost:7131/api/Industries/Get");
      let data = res.data;
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  const resultAdvert = () => {
    return data.map(industry => {
      let totalAds = industry.companyIndustries.reduce((sum, companyIndustry) => {
        return sum + companyIndustry.company.advertisements.length;
      }, 0);
      return {
        industryName: industry.name,
        totalAdvertisements: totalAds
      };
    });
  };

  const totalAdsPerIndustry = resultAdvert();

  return (
    <section className="industries py-lg-3 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-industries col-lg-12">
        {data.map((datas,index) => (<div className="industry-box d-flex align-items-center justify-content-between ">
            <div key={index} className="left-industry-box d-flex align-items-center gap-2">
              <div className="industry-icon">
                <img
                  src={datas.logo}
                  alt=""
                />
              </div>
              <div className="industry-name">{datas.name}</div>
            </div>
            <div className="industry-count">{totalAdsPerIndustry[index].totalAdvertisements} elan</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
