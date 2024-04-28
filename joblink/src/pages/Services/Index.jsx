import React from "react";
import "./Index.css";

const Index = () => {
  return (
    <section className="services w-50 m-auto py-lg-5 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-services d-flex row gap-5">
        <div className="top-services">
          <h1 className="top-services-text">Xidmətlər</h1>
        </div>
        <div className="center-services d-flex row gap-4">
          <div className="service-box no-premium">
            <div className="left-service-box">
              <h2>Bir vakansiya</h2>
              <p>1 ay müddətində aktiv qalır</p>
            </div>
            <div className="right-service-box">25 AZN</div>
          </div>
          <div className="service-box premium">
            <div className="left-service-box">
              <h2 className="premium-h2">Premium</h2>
              <p className="premium-p">
                Premium iş elanı saytda olan digər elanlardan xüsusi dizayn və
                Premium qeydi ilə <br /> fərqlənərək saytın yuxarı hissəsində,
                ilk onluqda 1 gün ərzində qalacaq
              </p>
            </div>
            <div className="right-service-box">40 AZN</div>
          </div>
        </div>
        <div className="bottom-services d-flex row p-0 gap-2">
          <h2>İş elanlarının yerləşdirilməsi</h2>
          <p>
            İş elanı yerləşdirmək üçün, sizdən vakant iş yeri haqqında məlumatı
            info@jobsearch.az ünvanına Word formatında göndərməyiniz xahiş
            olunur. Mətnin daha rahat oxunması üçün bizim tərəfdən müəyyən
            qrammatik düzəlişlər aparıla bilər.{" "}
          </p>
          <p>
            İşədüzəltmə üzrə beynəlxalq standart və prinsiplərə cavab verməyən,
            dəfələrlə bu prinsipləri pozmuş, həmçinin qeyri-qanuni fəaliyyətlə
            məşğul olan işəgötürən şirkətlərin elanlarının saytımızda
            yerləşdirilməsinə imtina verə bilərik.
          </p>
          <p>
            İşəgötürən şirkət iş elanında öz şirkət adını göstərməmək hüququna
            malikdir, lakin bununla belə məxfilik saxlanılmaqla saytın
            administratoru kimi həmin məlumatlar bizə təqdim olunmalıdır.
          </p>
          <p>
            Bitmə tarixi qeyd olunmayan iş elanları maksimum tarix olaraq 1
            aylıq götürüləcək. Bu müddət əlavə ödəniş olunmaqla artırıla bilər.
          </p>
          <p>
            İş elanının yerləşdirilməsi üçün Əlaqə bölməsinə də müraciət edə
            bilərsiniz.
          </p>

          <h2>Reklam bannerinin yerləşdirilməsi</h2>
          <p>
            Reklam bannerinin yerləşdirilməsi üçün xidmət haqqımız bannerin
            ölçüsündən və saytda olan yerindən asılıdır. Əlavə məlumat əldə
            etmək üçün Əlaqə bölməsindən müraciət edə bilərsiniz.{" "}
          </p>
          <h2>İş elanı Storilərinin yerləşdirilməsi </h2>
          <p>
            Bu xüsusi funksiya dəyərli müştərilərimiz üçün yaradılmışdır. Sizin
            elanın Storisi saytın sol menyusunun bütün bölmələrində əmələ
            gələcək, bu sizin auditoriyanızın daha da genişlənməsinə imkan
            yaradacaq, həm də şirkəti işaxtaranlar arasında daha da yaxşı
            tanıdacaq. Storidə elanın yerləşdirilməsi üçün xidmət haqqı əlavə 5
            manat təşkil edir.
          </p>
          <h2>Xidmətin ödənişi</h2>
          <p>
            JobSearch.az rəsmi qeydiyyatdan keçmiş şirkətdir. Ödənişlər bank
            köçürməsi vasitəsilə həyata keçirilir və bütün vergilər müvafiq
            qaydada ödənilir. Biz həmçinin digər növ ödənişləri qəbul edirik və
            qanunvericiliyə uyğun sənədləşmə təqdim edirik. Əməkdaşlıq xidmət
            müqaviləsi bağlandıqdan sonra başlayır. Yeni müştərilərdən avans
            olaraq ödəniş tələb oluna bilər, lakin müəyyən vaxt əməkdaşlıqdan
            sonra ödəniş xidmət göstərildikdən sonra həyata keçirilə bilər.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
