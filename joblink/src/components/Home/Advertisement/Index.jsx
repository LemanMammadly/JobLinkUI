import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";
import SearchContext from "../../../contexts/SearchContext";
import AdvertisementFilterContext from "../../../contexts/AdvertisementFilterContext";

const Index = () => {
  const [data, setData] = useState([]);
  const { searchValue } = useContext(SearchContext);
  const { filterDate } = useContext(AdvertisementFilterContext);
  const { filterSalary } = useContext(AdvertisementFilterContext);
  const { filterSort } = useContext(AdvertisementFilterContext);
  const { filterArea } = useContext(AdvertisementFilterContext);

  useEffect(() => {
    axios
      .get("https://localhost:7131/api/Advertisements/GetAccept")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue]);

  useEffect(() => {
    axios
      .get(
        `https://localhost:7131/api/Advertisements/FilterAll?Date=${filterDate}&Sort=${filterSort}&Salary=${filterSalary}&Area=${filterArea}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filterDate,filterSort,filterSalary,filterArea]);

  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const dateTime = (dateTimes) => {
    const date = new Date(dateTimes);
    const day = date.getDate();
    const month = date.getMonth();

    return `${day} ${months[month]}`;
  };

  const filteredAdvertisement = data.filter((adver) =>
    adver.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="advertisement-section py-lg-2 px-lg-5 px-md-3 py-md-1 px-2 py-2 my-3">
      <table class="table table-hover">
        <thead>
          <tr style={{ border: "1px solid #fff" }}>
            <th scope="col">Elan</th>
            <th scope="col">Şirkət</th>
            <th scope="col">Dərc olunub</th>
            <th scope="col">Son tarix</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvertisement.map((datas) => (
            <tr key={datas.id}>
              <td className="adver-name">
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
                {datas.title}
                <span className="new">YENİ</span>
              </td>
              <td className="comp-name">
                {" "}
                <img
                  className="me-2"
                  src={datas.company.logo}
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt=""
                />{" "}
                {datas.company.name}
              </td>
              <td className="adver-date">{dateTime(datas.createDate)}</td>
              <td className="adver-date">{dateTime(datas.endDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Index;
