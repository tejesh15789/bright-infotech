import React from 'react';
import Companies from "./hiringparteners"; 
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const HiringCart = () => {
  return (
    <div className='w-100 bg-light'>
    <section className="container ">
      <motion.div
         variants={FadeIn("down", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0.9 }}
       className="d-flex justify-content-center py-5 ">
        <h1 className='fw-bold'>Our Hiring <b style={{ color: "" }}> Parteners</b></h1>
      </motion.div>
      <div className="row">
        {Companies.map((val) => (
          <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.9 }}
          className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center align-items-center" key={val.id}>
            <div className="">
              <img src={val.logo} alt="" className="img-fluid" style={{ width: '130px', height: '100px', objectFit: 'conatin' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default HiringCart;
