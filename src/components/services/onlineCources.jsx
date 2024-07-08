import React from "react";
import "./cources.css"
import Courcessub from "./courcesCart";
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";



const Contentserver = () => {
    return (
        <div className="d-flex justify-content-center w-100 bg-light">
            <div className="row container  ">
                <section className="col-12 bg-light  py-5 d-flex flex-column justify-content-center ">
                    <motion.div
                        variants={FadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.9 }}
                        className="d-flex justify-content-center align-items-center py-3">
                        <h1 className="fw-bold fs-1 ">In-Demand Courses For <b style={{ color: "darkorange" }}>Quick Job</b> </h1>
                    </motion.div>
                    <div className="">
                        <div className="cartboxes row  gap-3">
                            {Courcessub.map((val) => (
                                <motion.div
                                    variants={FadeIn("right", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.9 }}
                                    className="box-int col col-sm-6 col-md-4  border border-2 border-dark rounded" key={val.id}>
                                    <div className="logo2 d-flex justify-content-center align-items-center mt-2">{val.logo}</div>
                                    <div className="tittle-main  d-flex justify-content-center align-items-center mt-2 ">
                                        <h3 className="fw-bold fs-6 tittle2">{val.title}</h3>
                                    </div>
                                    <div className="img-time">
                                        <p className="desccart">{val.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>





            </div>
        </div>

    )
}
export default Contentserver;





