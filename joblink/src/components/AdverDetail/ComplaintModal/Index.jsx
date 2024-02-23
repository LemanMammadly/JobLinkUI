import React, { useState } from "react";
import "./Index.css";

const Index = () => {
    const [clickOther,setClickOther]=useState(false);

    const openTextarea=()=>{
        setClickOther(true)
    }

    const closeTextarea=()=>{
        setClickOther(false)
    }

  return (
    <div
      class="modal fade complain-modal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" style={{borderBottom:"none"}}>
            <h1
              class="modal-title complain-head fs-5 px-2 py-2"
              id="exampleModalLabel"
            >
              Şikayət et
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <hr style={{margin:"0 25px"}} />
          <div class="modal-body col-lg-12  d-flex flex-column p-4 gap-3">
            <div className="top-modal-body col-lg-12  d-flex">
              <div className="left-modal-body col-lg-6 d-flex flex-column gap-3">
                <div className="form-group d-flex align-items-center">
                  <input
                    className="me-2 custom-radio-input"
                    type="radio"
                    id="a"
                    name="complain"
                    onClick={closeTextarea}
                  />
                  <label onClick={closeTextarea} htmlFor="a">Əlaqə saxlamaq olmur</label> <br />
                </div>
                <div className="form-group d-flex align-items-center">
                  <input onClick={closeTextarea} className="me-2" type="radio" id="b" name="complain" />
                  <label onClick={closeTextarea} htmlFor="b">Real iş elanı deyil</label> <br />
                </div>
                <div className="form-group d-flex align-items-center">
                  <input onClick={closeTextarea} className="me-2" type="radio" id="c" name="complain" />
                  <label onClick={closeTextarea} htmlFor="c">İşin təsviri düzgün deyil</label> <br />
                </div>
              </div>
              <div className="right-modal-body col-lg-6 d-flex flex-column gap-3">
                <div className="form-group d-flex align-items-center">
                  <input onClick={closeTextarea} className="me-2" type="radio" id="d" name="complain" />
                  <label onClick={closeTextarea} htmlFor="d">Elan aktual deyil</label> <br />
                </div>
                <div className="form-group d-flex align-items-center">
                  <input onClick={closeTextarea} className="me-2" type="radio" id="e" name="complain" />
                  <label onClick={closeTextarea} htmlFor="e">Ünvan düzgün deyil</label> <br />
                </div>
                <div className="form-group d-flex align-items-center">
                  <input onClick={closeTextarea} className="me-2" type="radio" id="f" name="complain" />
                  <label onClick={closeTextarea} htmlFor="f">
                    Əmək bazarı üzrə aşağı maaş təklifi
                  </label>{" "}
                  <br />
                </div>
              </div>
            </div>
            <div className="bottom-modal-body">
              <div className="form-group d-flex align-items-center col-lg-12">
                <input onClick={openTextarea} className="me-2" type="radio" id="g" name="complain" />
                <label onClick={openTextarea} htmlFor="g">Digər</label> <br />
              </div>
              {
                clickOther ? 
                <textarea style={{marginTop:"20px",border:"1px solid #DFDFDF",outline:"none",padding:"5px",resize:"none",fontSize:"13px",color:" rgba(105, 111, 120, 0.798)"}} className="w-100" id="" cols="30" rows="3"></textarea> :
                ""
              }
            </div>
          </div>
          <div class="modal-footer" style={{borderTop:"none",padding:"5px 20px 20px 5px"}}>
            <button type="button" class="btn btn-primary" style={{width:"150px"}}>
              <i class="fa-solid fa-location-arrow me-2"></i>
              Göndər
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
