import React from 'react'
import "./Index.css"

const Index = () => {
  return (
    <section className="full-list">
        <div className="full-list-head">
          <h1>Seçilmiş elanlar</h1>
        </div>
        <div className="full-list-text py-lg-2 px-lg-5 px-md-3 py-md-1 px-2 py-2 my-3">
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
          <tr>
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
                <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
              </svg>
              Insurance Service Representative
              <span className="new">YENİ</span>
            </td>
            <td className="comp-name">
              {" "}
              <img
                className="me-2"
                src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg"
                style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                alt=""
              />{" "}
              Insurance Service
            </td>
            <td className="adver-date">16 fevral</td>
            <td className="adver-date">16 mart</td>
          </tr>
          <tr>
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
                <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
              </svg>
              Insurance Service Representative
              <span className="premium">PREMIUM</span>
            </td>
            <td className="comp-name">
              {" "}
              <img
                className="me-2"
                src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg"
                style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                alt=""
              />{" "}
              Insurance Service
            </td>
            <td className="adver-date">16 fevral</td>
            <td className="adver-date">16 mart</td>
          </tr>
        </tbody>
      </table>
        </div>
    </section>
  )
}

export default Index