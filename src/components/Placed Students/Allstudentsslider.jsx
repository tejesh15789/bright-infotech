import React from 'react';
import placedstudentsdetails from "./placedstudentslist";
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";


const Allstudentsslider = () => {
    return (

        <div className='container w-100 overflow-hidden py-4'>
            <div className='sliderph' >

                {placedstudentsdetails.map((val, index) => (
                    <motion.div
                        variants={FadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.9 }}
                        className="slider-tracks " key={index}>
                        <div className="slideph d-flex justify-content-center">
                            <img src={val.photo} alt={val.name} className='img-sliders' />
                        </div>
                        <div className="text-center text-light">
                            <strong className="text-center">{val.name}</strong>
                            <p className="text-center">{val.role}</p>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default Allstudentsslider

