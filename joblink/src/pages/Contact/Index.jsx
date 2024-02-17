import React from "react";
import "./Index.css";

const Index = () => {
  return (
    <section className="contact w-50 m-auto py-lg-5 px-lg-5 px-md-3 py-md-1 px-2 py-2">
      <div className="all-contact d-flex row gap-5">
        <div className="top-contact">
          <h1 className="top-contact-text">Əlaqə</h1>
        </div>
        <div className="bottom-contact d-flex row gap-3">
          <div className="address">
            <div className="top-address">
              <div className="d-flex align-items-start justify-content-between">
                <h3>Address</h3>
                <div className="address-text">
                  <p>
                    8 noyabr prospekti, Azure Biznes Mərkəzi, 18-ci mərtəbə.
                    Bakı, AZ 1025, Azərbaycan
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-address p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221166.67549824456!2d49.75505424591176!3d40.45850835298061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1708177403658!5m2!1sen!2saz"
                width="590"
                height="250"
                style={{ border: "0;", borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="telephone">
          <hr />
            <div className="d-flex align-items-start justify-content-between">
              <h3>Telephone</h3>
              <div className="telephone-text">
                <p>+994 12 434 50 30</p>
                <p>+994 12 434 50 30</p>
                <p>+994 12 434 50 30</p>
              </div>
            </div>
          </div>
          <div className="mobile">
          <hr />
            <div className="d-flex align-items-start justify-content-between">
              <h3>Mobile</h3>
              <div className="mobile-text">
                <p>+994 50 205 66 20</p>
                <p>+994 50 205 66 20</p>
              </div>
            </div>
          </div>
          <div className="email">
          <hr />
            <div className="d-flex align-items-start justify-content-between">
              <h3>Email</h3>
              <div className="email-text">
                <p>info@jobsearch.az</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
