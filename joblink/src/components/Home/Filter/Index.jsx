import React, { useContext, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "./Index.css";
import SearchContext from "../../../contexts/SearchContext"

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const {setSearchValue} = useContext(SearchContext)

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
  };


  const searchByName = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  }


  return (
    <section className="py-lg-2 px-lg-5 px-md-3 py-md-1 px-2 py-2 filter-section">
      <div className="all-filter-section">
        <div className="all-left-filters d-flex gap-5">
          <select name="" id="" style={{ cursor: "pointer" }}>
            <option value="">Yerləşdirilib</option>
            <option value="">1 gün</option>
            <option value="">3 gün</option>
            <option value="">1 həftə</option>
            <option value="">10 gün</option>
            <option value="">2 həftə</option>
          </select>
          <select name="" id="" style={{ cursor: "pointer" }}>
            <option value="">Sıralama</option>
            <option value="">Maaş üzrə</option>
            <option value="">Vəzifə adı A-Z</option>
            <option value="">Şirkət adı A-Z</option>
            <option value="">Ən çox baxış sayı</option>
            <option value="">Ən populyar kategoriya üzrə</option>
          </select>
          <div
            className="many-filter gap-3"
            onClick={toggleFilters}
            style={{
                cursor: "pointer",
                backgroundColor: showFilters ? "#0B4DDD" : "#EAEDEF", 
                color: showFilters ? "#fff" : "",
                transition:"0.5s"
              }}
          >
            <span className="many-filter-head">Daha çox filter</span>
            {showFilters ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {showFilters && (
              <div
                className="inner-filters d-flex flex-column"
                onClick={handleInnerClick}
              >
                <select name="" id="">
                  <option value="">Maaş</option>
                  <option value="">0-500</option>
                  <option value="">500-1000</option>
                  <option value="">1000-2000</option>
                  <option value="">2000-5000</option>
                  <option value="">5000+</option>
                </select>
                <select name="" id="">
                  <option value="">Ərazi</option>
                  <option value="Ağcabədi">Ağcabədi</option>
                  <option value="Ağdam">Ağdam</option>
                  <option value="Ağdaş">Ağdaş</option>
                  <option value="Ağdərə">Ağdərə</option>
                  <option value="Ağstafa">Ağstafa</option>
                  <option value="Ağsu">Ağsu</option>
                  <option value="Astara">Astara</option>
                  <option value="Bakı">Bakı</option>
                  <option value="Balakən">Balakən</option>
                  <option value="Beyləqan">Beyləqan</option>
                  <option value="Biləsuvar">Biləsuvar</option>
                  <option value="Cəbrayıl">Cəbrayıl</option>
                  <option value="Cəlilabad">Cəlilabad</option>
                  <option value="Daşkəsən">Daşkəsən</option>
                  <option value="Füzuli">Füzuli</option>
                  <option value="Gədəbəy">Gədəbəy</option>
                  <option value="Gəncə">Gəncə</option>
                  <option value="Goranboy">Goranboy</option>
                  <option value="Göyçay">Göyçay</option>
                  <option value="Göygöl">Göygöl</option>
                  <option value="Göytəpə">Göytəpə</option>
                  <option value="Hacıqabul">Hacıqabul</option>
                  <option value="İmişli">İmişli</option>
                  <option value="İsmayıllı">İsmayıllı</option>
                  <option value="Kəlbəcər">Kəlbəcər</option>
                  <option value="Kürdəmir">Kürdəmir</option>
                  <option value="Laçın">Laçın</option>
                  <option value="Lənkəran">Lənkəran</option>
                  <option value="Lerik">Lerik</option>
                  <option value="Masallı">Masallı</option>
                  <option value="Mingəçevir">Mingəçevir</option>
                  <option value="Naftalan">Naftalan</option>
                  <option value="Naxçıvan">Naxçıvan</option>
                  <option value="Neftçala">Neftçala</option>
                  <option value="Oğuz">Oğuz</option>
                  <option value="Ordubad">Ordubad</option>
                  <option value="Qax">Qax</option>
                  <option value="Qazax">Qazax</option>
                  <option value="Qəbələ">Qəbələ</option>
                  <option value="Qobustan">Qobustan</option>
                  <option value="Quba">Quba</option>
                  <option value="Qubadlı">Qubadlı</option>
                  <option value="Qusar">Qusar</option>
                  <option value="Saatlı">Saatlı</option>
                  <option value="Sabirabad">Sabirabad</option>
                  <option value="Şabran">Şabran</option>
                  <option value="Şahbuz">Şahbuz</option>
                  <option value="Şamaxı">Şamaxı</option>
                  <option value="Şəki">Şəki</option>
                  <option value="Şəmkir">Şəmkir</option>
                  <option value="Şirvan">Şirvan</option>
                  <option value="Siazan">Siazan</option>
                  <option value="Sumqayıt">Sumqayıt</option>
                  <option value="Şuşa">Şuşa</option>
                  <option value="Tərtər">Tərtər</option>
                  <option value="Toğuz">Toğuz</option>
                  <option value="Ucar">Ucar</option>
                  <option value="Xaçmaz">Xaçmaz</option>
                  <option value="Xankəndi">Xankəndi</option>
                  <option value="Xırdalan">Xırdalan</option>
                  <option value="Xızı">Xızı</option>
                  <option value="Xocalı">Xocalı</option>
                  <option value="Xocavənd">Xocavənd</option>
                  <option value="Yardımlı">Yardımlı</option>
                  <option value="Yevlax">Yevlax</option>
                  <option value="Zaqatala">Zaqatala</option>
                  <option value="Zəngilan">Zəngilan</option>
                  <option value="Zərdab">Zərdab</option>
                </select>
              </div>
            )}
          </div>
        </div>
        <div className="search-filter">
          <input type="text" placeholder="Axtarış" onChange={searchByName} />
          <CiSearch style={{ fontSize: "19px" }} />
        </div>
      </div>
    </section>
  );
};

export default Index;
