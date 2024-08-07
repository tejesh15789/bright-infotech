import React from 'react'
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const Thewayweteach = () => {
    return (
        <div>
            <section className="col-12 weteach w-100">
                <div className="container">

                    <motion.div
                        variants={FadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.9 }}
                        className="d-flex justify-content-center py-5">
                        <div>
                            <h1 className="fs-1 fw-bold" style={{ color: "skyblue" }}>The Way We - <b className="text-light">Teach</b></h1>
                        </div>
                    </motion.div>

                    <div className="row">
                        <motion.div
                            variants={FadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex justify-content-center align-items-center">
                            <img src="./img/tutor1.png" alt="" className=" img-fluid" />
                        </motion.div>
                        <motion.div
                            variants={FadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex flex-column text-center justify-content-center align-items-center ">
                            <h4 className="fw-bold" style={{ color: "skyblue" }}>Industry experts as your tutors</h4>
                            <p className="fs-5 fc-gray">All our tutors are from the top IT companies and they are very good at building real-time applications at massive scale.</p>
                        </motion.div>
                    </div>

                    <div className="row">
                        <motion.div
                            variants={FadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex flex-column justify-content-center align-items-center">
                            <h4 className="fw-bold " style={{ color: "skyblue" }}>Beginner to job-ready</h4>
                            <p className="fc-gray fs-5">We will teach you from basics to advanced level. You don't have to learn anything prior to taking courses from us. You will become job-ready by end of the course.</p>
                        </motion.div>
                        <motion.div
                            variants={FadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex justify-content-center align-items-center">
                            <img src="./img/jumping.png" alt="" className=" img-fluid" />
                        </motion.div>
                    </div>

                    <div className="row">
                        <motion.div
                            variants={FadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex justify-content-center align-items-center">
                            <img src="./img/realtime.png" alt="" className=" img-fluid" />
                        </motion.div>
                        <motion.div
                            variants={FadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex flex-column justify-content-center align-items-center">
                            <h4 className="fw-bold" style={{ color: "skyblue" }}> Real-time concepts, no theory</h4>
                            <p className="fc-gray fs-5">Our curriculam includes 10% theiry and 90% real-time concepts. You will be able to build real-time apps by end of the course.</p>
                        </motion.div>
                    </div>

                    <div className="row">
                        <motion.div
                            variants={FadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex flex-column justify-content-center align-items-center">
                            <h4 className="fw-bold" style={{ color: "skyblue" }}>Real-time projects & Mock interviews</h4>
                            <p className="fc-gray fs-5">You will learn by building real-time applications diring the training and We prepare you for the interviews and will take 2 mock interviews</p>
                        </motion.div>
                        <motion.div
                            variants={FadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex justify-content-center align-items-center">
                            <img src="./img/realproject.png" alt="" className=" img-fluid" />
                        </motion.div>
                    </div>
                    
                    <div className="row">
                        <motion.div
                             variants={FadeIn("right", 0.2)}
                             initial="hidden"
                             whileInView={"show"}
                             viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex justify-content-center align-items-center">
                            <img src="./img/money.gif" alt="" className=" img-fluid" />
                        </motion.div>
                        <motion.div
                            variants={FadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className="col d-flex flex-column justify-content-center align-items-center">
                            <h4 className="fw-bold" style={{ color: "skyblue" }}>1 week money back gurantee</h4>
                            <p className="fc-gray fs-5">If you don't like our teaching, we will refund your money without asking any questions.</p>
                        </motion.div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Thewayweteach
