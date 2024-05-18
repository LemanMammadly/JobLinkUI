import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";
import SearchContext from "../../../contexts/SearchContext";

const Index = () => {
  const [data, setData] = useState([]);
  const { searchValue } = useContext(SearchContext);

  async function GetData() {
    try {
      let res = await axios.get("https://localhost:7131/api/Companies/Get");
      let data = res.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  const filteredCompany = data.filter((company) =>
    company.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="companies py-lg-4 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-companies col-lg-12">
        {filteredCompany.map((datas) => (
          <div className="company-box d-flex">
            <div className="left-company-box d-flex row align-items-center gap-2">
              <div className="company-icon">
                <img src={datas.logo} alt="" />
              </div>
              <div className="company-name">{datas.name}</div>
              <div className="company-count">
                {datas.advertisements.length} elan
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
