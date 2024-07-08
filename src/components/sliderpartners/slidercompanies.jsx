import React from "react";
import "./slidercom.css";
import companies from "./slidercomp.js"
import companies2 from "./slidercomp2.js"
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const Slidercompanies = () => {
    return (
        <>
            <div className="w-100">
                <section className="sliderhome container mb-4">
                    <motion.div
                        variants={FadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.9 }}
                        className="sliderheading d-flex flex-column  justify-content-center align-items-center pt-4 container">
                        <h1 style={{ color: "skyblue" }}>With Great <b className="text-light">Outcomes</b> </h1>
                        {/* <h4>Placed Students</h4> */}
                    </motion.div>
                    <main className="d-flex flex-column gap-3 justify-content-center align-items-center">
                        <div className="slidercards ">
                            <div className="slidermain">
                                {companies.map(val => (

                                    <motion.div
                                    variants={FadeIn("left", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.9 }}
                                    className="boximage d-flex flex-row" key={val.id}>
                                        <img src={val.logo} alt="company-logo" />
                                    </motion.div>

                                ))}
                            </div>
                        </div>
                        <div className="slidercards2">
                            <div className="slidermain2">
                                {companies2.map(val => (

                                    <motion.div
                                    variants={FadeIn("right", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.9 }}
                                     className="boximage2 d-flex flex-row" key={val.id}>
                                        <img src={val.logo} alt="company-logo" />
                                    </motion.div>

                                ))}
                            </div>
                        </div>
                    </main>
                </section>
            </div>

        </>
    )
}
export default Slidercompanies;

