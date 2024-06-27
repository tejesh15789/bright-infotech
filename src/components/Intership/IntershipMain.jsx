
import React, { useState } from 'react';
import IntershipCard from './IntershipCard';
import "./intership.css"
import Modal from "react-modal";
import Formcard from "../common/form/form"


const IntershipMain = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <Modal isOpen={isOpen} style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.5)' } }} onRequestClose={() => setOpen(false)} className='modalform d-flex justify-content-center align-items-center'>
        <Formcard setClose={setOpen} />
      </Modal>
      <section className="container">
        <main className='row d-flex py-5 gap-5'>
          <div className="col px-5">
            <h1 className='fw-bold py-3' style={{ color: "skyblue" }}>
              Bright InfoTech <b className='text-white'>Internship Programs</b>
            </h1>
            <p className='text-light fs-5'>
              Join our internship program today and start your journey towards a successful career in the software industry!
            </p>
            <div className='pt-5'>
              <button className="ui-btn col-12" onClick={() => setOpen(true)}>
                <span className='fw-bold'>Enroll Now</span>
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 d-flex justify-content-center ">
            <img src="./img/internshiplogo1.png" alt="Internship Logo" className='img-fluid' />
          </div>
        </main>


      </section>


      <section className='bg-light'>
        <IntershipCard />
      </section>

    </div>
  );
}

export default IntershipMain;
