import React, { useState } from 'react';
import intershipcource from './intershipcards.js';
import Stylebtn from "./stylebtn.jsx"
import { init } from '@emailjs/browser';
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const IntershipCard = () => {
  const [Url, setUrl] = useState("");

  return (
    <div>
      <section className="py-5">
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.9 }}
          className="cardcontent d-flex justify-content-center">
          <h1 className="fw-bold fs-1">
            Paid Internships
          </h1>
        </motion.div>

        <main className='pt-5 container d-flex justify-content-center align-items-center'>
          <div className='row  py-5'>
            {intershipcource.map((val) => (
              <motion.div
                variants={FadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.9 }}
                className="col-md-6 col-lg-4 col-sm-6 py-3 d-flex justify-content-center align-items-center" key={val.id}>
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
                    <button className='rounded-pill' onClick={() => {
                      setUrl(val.download)

                    }}><Stylebtn url={Url} /></button>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default IntershipCard;
