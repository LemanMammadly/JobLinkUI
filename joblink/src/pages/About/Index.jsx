import React from "react";
import "./Index.css"

const Index = () => {
  return (
    <section className="about w-50 m-auto py-lg-5 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-about d-flex row gap-5">
        <div className="top-about">
          <h1 className="top-about-text">Haqqımızda</h1>
        </div>
        <div className="center-about">
          <h3 className="center-about-head">JobSearch.az</h3>
          <p className="center-about-text">
            Azərbaycanda iş axtarışı üçün nəzərdə <br /> tutulmuş onlayn platformadır.
          </p>
        </div>
        <div className="bottom-about">
          <p className="bottom-about-text">
            Yarandığı, 2005-ci ildən bu günədək sayt illər boyu reytinq üzrə
            Azərbaycanda ən populyar iş axtarışı saytı olaraq qalır.
          </p>
          <p className="bottom-about-text">
            Biz ilk növbədə iş axtarışında olanlara dəstək olmağa çalışırıq,
            onlara iş axtarışı və şirkətləri tədqiq etmək üçün təmənnasız
            imkanlar yaradırıq. Hər gün minlərlə iş axtarışında olan insanlar
            üçün yeni iş imkanları yaradırılır.
          </p>
          <p className="bottom-about-text">
            Dəyərli müştərilərimiz olan şirkətlər haqqında da daima düşünürük və
            onların əmək bazarında daha da yaxşı tanıdılmasında və ən yaxşı
            namizədlərin tapılmasında dəstək oluruq. Müştərilərimiz arasında
            beynəlxalq və yerli neft və qeyri-neft şirkətləri, dövlət
            qurumlarını, maliyyə institutlarını, qeyri-hökümət təşkilatlarını,
            orta və kiçik sahibkarları və s. yer tutur.
          </p>
          <p className="bottom-about-text">
            {" "}
            Saytın istifadəçilərini minlərlə müştərilər və on minlərlə iş
            axtarışında olan istifadəçilər təşkil edir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
