import React from 'react'
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";

const Abouhome = () => {
    return (
        <div className='w-100 bg-light pb-5'>
            <div className="container">
                <section className=''>
                    <motion.div
                     variants={FadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: true, amount: 0.9 }}
                     className='d-flex justify-content-center py-4 col'>
                        <h1 className='fw-bold'>Career Opportunities at Bright</h1>
                    </motion.div>
                    <div className='row'>
                        <motion.div
                         variants={FadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.9 }}
                        className='col  ff'>
                            <p>Bright InfoTech is India’s leading Software Training Institute that is trusted by organizations across the globe. We are an Institute offering a wide range of Master Courses in Data Software Engineering, Full Stack Developer, AWS, and Data Science and AI. We have been training students and transforming them into IT Professionals for a decade.</p>
                            <p>The reason behind becoming one of the most preferred IT Training Institutes is that we offer global certifications along with career guidance and placement assistance. Besides that, the professors at our Institute are Experts from the Industry which gives an authentic touch to our up-to-date and interesting curriculum.</p>
                            <p>We offer advanced IT Courses with Placements, making us stand out in the market. Bright InfoTech is one step ahead as we are offering IT jobs for freshers now. Our workplace is not just about completing daily tasks, but it is more about having a healthy as well as friendly environment for you to work in.</p>
                            <p>Our platform offers a range of IT jobs for freshers, providing an opportunity to build your career in the Tech Industry.</p>
                        </motion.div>
                        <motion.div
                         variants={FadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.9 }}
                        className="col-12 d-flex justify-content-center align-items-center  ">
                            <img src="./img/about1.jpg"  className="img-fluid" alt=""  />
                        </motion.div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Abouhome
