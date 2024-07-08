import React from "react";
import Studentscards from "./studentcards";
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const Placedcards = () => {
    return (
        <div className="w-100 ">
            <section className="homecart ">
                <motion.div
                 variants={FadeIn("up", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: true, amount: 0.9 }} >
                    <h1>Some of our recent success stories</h1>
                </motion.div>
                <div className="placedcardsbox">
                    {Studentscards.map((val) => (
                        <motion.div
                        variants={FadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.9 }} 
                         className="card" key={val.id}>
                            <div className="img">
                                <img src={val.image} alt="{val.name}" />
                            </div>
                            <span className="fw-bold fs-6">{val.name}</span>
                            <span className="fs-6">{val.role}</span>
                            <p className="info">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Placedcards;



