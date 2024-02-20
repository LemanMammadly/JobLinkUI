import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className="empty-list">
        <div className="empty-list-head">
          <h1>Seçilmiş elanlar</h1>
        </div>
        <div className="empty-list-text">
          <i class="fa-solid fa-heart"></i>
          <p>Sizin seçilmiş elanınız yoxdur</p>
          <Link to="/">Vakansiyalara keçid</Link>
        </div>
    </section>
  );
};

export default Index;
