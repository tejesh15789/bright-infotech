import React from 'react'
import HiringCart from './HiringCart'
import "./hirining.css";
import Slidercompanies from "../sliderpartners/slidercompanies"

const HiringMain = () => {
  return (
    <>
      <div>

        <section className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="hiringheading">
                <h1 className="fw-bold text-light">
                  <b style={{ color: "skyblue" }}>1000+</b> Organizations TRUST US WITH THEIR Openings
                </h1>
                <p className="text-light">
                  Organizations across the globe trust our students and their brilliant technical skills in Full Stack Development, Data Science & Analytics with AI, AWS Cloud Technology, which results in them getting hired at excellent companies with impressive pay scales. Itvedant, India’s fastest-growing Software Training Institute, provides a range of IT Courses helping to shape the future of our students in every way possible. The Coding Courses provided by our Institute are highly valuable and worthy for the students.
                </p>
              </div>
              <div className="d-flex gap-5">
                <div className="text-center text-lg-start">
                  <h1 className="fw-bold" style={{ color: "skyblue" }}>1,000+</h1>
                  <p className="fw-bold text-light">Hiring companies</p>
                </div>
                <div className="text-center text-lg-start">
                  <h1 className="fw-bold" style={{ color: "skyblue" }}>2000+</h1>
                  <p className="fw-bold text-light">Students already placed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src="./img/companies.png" alt="" className="img-fluid" width={400} />
            </div>
          </div>
        </section>

        <HiringCart />
      <Slidercompanies />
      </div>
    </>
  )
}

export default HiringMain;