import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import FadeIn from "../../../variants.js";

const Head = () => {
  return (
    <div>
        <section className='head'>
            <div className='container flexSB'>
                <motion.div
                 variants={FadeIn("right", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: true, amount: 0.9 }}
                 className="logo">
                  
                    <b>BRIGHT</b><br /> <span>INFOTECH</span>
                </motion.div>
                <motion.div
                 variants={FadeIn("left", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: true, amount: 0.9 }}
                 className="social">
                    <a href="https://www.facebook.com/bright.infotch?mibextid=ZbWKwL"><i className="fa-brands fa-facebook icon img-fluid"></i></a>
                    <a href="https://www.instagram.com/bright_infotech_/"><i className="fa-brands fa-instagram icon img-fluid"></i></a>
                    <a href="https://www.linkedin.com/company/bright-infotech/?originalSubdomain=in"><i className="fa-brands fa-linkedin icon img-fluid"></i></a>
                    <a href=""><i className="fa-brands fa-twitter icon img-fluid"></i></a>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default Head;