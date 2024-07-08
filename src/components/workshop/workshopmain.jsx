import React from 'react'
import "./workshop.css"
import { motion } from "framer-motion";
import  FadeIn  from "../../variants.js";

const Workshopmain = () => {
    return (
        <>
            <section className="py-5 d-flex justify-content-center align-items-center">
                <main className="container">
                    <div 
                    
                    className="row">
                        <motion.div
                         variants={FadeIn("right", 0.2)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{ once: true, amount: 0.9 }}
                         className="col-lg-6 mb-4 mb-lg-0 px-3 py-2 ff">
                            <h1 className="fw-bold  w-100" style={{color:"skyblue"}}>
                                OUR <b className="text-light">WORKSHOPS</b>
                            </h1>
                            <h3 className="w-100  py-3 fw-bold text-light">
                                India's First Passionpreneur Mentor, Best Selling Author - <b  style={{color:"skyblue"}}>10% Theory + 90% Practical</b>
                            </h3>
                            <h3 className="w-75  fw-bold text-light">Python-Selenium</h3>
                            <h5 className="" style={{color:"skyblue"}}>
                                Learn From the Best Trainer - <b className="text-light fs-4">Mr. Umesh Thorat Sir</b>
                            </h5>
                        </motion.div>
                        <motion.div
                         variants={FadeIn("left", 0.2)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{ once: true, amount: 0.9 }}
                         className="col-lg-6 d-flex justify-content-center align-items-center">
                            <img src="./img/workshop/workshop10.jpeg" alt="" className="img-fluid" />
                        </motion.div>
                    </div>
                </main>
            </section>

          
        </>
    )
}

export default Workshopmain
