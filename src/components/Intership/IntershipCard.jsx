import React from 'react';
import intershipcource from './intershipcards.js';
import Stylebtn from "./stylebtn.jsx"
import { init } from '@emailjs/browser';


const IntershipCard = () => {
  
  return (
    <div>
      <section className="py-5">
        <div className="cardcontent d-flex justify-content-center">
          <h1 className="fw-bold fs-1">
            Paid Internships
          </h1>
        </div>

        <main className='pt-5 container d-flex justify-content-center align-items-center'>
          <div className='row  py-5'>
            {intershipcource.map((val) => (
              <div className="col-md-6 col-lg-4 col-sm-6 py-3 d-flex justify-content-center align-items-center" key={val.id}>
                <div className="card h-100 w-75 border border-dark ">
                  <div className="overflow-hidden p-1 ">
                    <img src={val.image} alt={val.courcename} className="card-img-top rounded img-fluid" height={200} />
                  </div>
                  <div className='card-body row justify-content-between'>
                    
                    <h4 className='card-title '>{val.courcename}</h4>
            
                    <p className='card-text'><b>Duration :</b> {val.duration}</p>
                    <p className='card-text'><b>Course Details :</b> {val.desc}</p>
                   
                    
                  </div>
                  <div className='mb-3 mx-auto'>
                    <Stylebtn />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default IntershipCard;
