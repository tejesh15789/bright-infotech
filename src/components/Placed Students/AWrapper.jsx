import React from 'react';
import awrapper from './successdata.js';
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const AWrapper = () => {
  return (
    <>
     <section className='container text-center awrapper-box'>
    <div className="row py-2 my-3">
        {awrapper.map((val) => (
            <motion.div
            variants={FadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.9 }}
             className='col-12 col-sm-6 col-lg-3' key={val.id}>
                <div className="row">
                    <div className="col-12">
                        <img src={val.cover} alt={val.title} width={80} height={70} />
                    </div>
                    <div className="col">
                        <h1 className='fw-600 text-light fs-4'><b>{val.count}</b></h1>
                        <h3 className='fw-600 text-light fs-6'><b>{val.title}</b></h3>
                    </div>
                </div>
            </motion.div>
        ))}
    </div>
</section>

    </>
  )
}

export default AWrapper;
