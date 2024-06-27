import React from "react";
import "./contacts.css"

import ContactUs from "./Contactcard.jsx"
import Maplocation from "./map"
import Footer from "../common/footer/footer.jsx";

const Contact = ()=>{
    return (
        <div>
           <section className="contacthead d-flex justify-content-center align-items-center ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0 ">
            <div className="contactus">
              <h1 className="fw-bold fs-1 pt-5 text-light">
                Let's connect. We are <span className="text-warning">just a click away!</span>
              </h1>
              <p className="fs-6 pt-2 text-light">
                We believe in giving the right guidance. Our team of career guide ninjas are ready to hear from you.
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="backgroundimg">
              <img src="./img/call2.png" alt="Call us" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
                <ContactUs/>
               
            <section>
                <Maplocation/>
            </section>
            <section>
              <Footer/>
            </section>
        </div>
    )
}
export default Contact;