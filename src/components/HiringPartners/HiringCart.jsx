import React from 'react';
import Companies from "./hiringparteners"; // Adjusted path if necessary


const HiringCart = () => {
  return (
    <div className='w-100 bg-light'>
    <section className="container ">
      <div className="d-flex justify-content-center py-5 ">
        <h1 className='fw-bold'>Our Hiring <b style={{color: 'darkblue'}}> Parteners</b></h1>
      </div>
      <div className="row">
        {Companies.map((val) => (
          <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center align-items-center" key={val.id}>
            <div className="">
              <img src={val.logo} alt="" className="img-fluid" style={{ width: '130px', height: '100px', objectFit: 'conatin' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default HiringCart;
