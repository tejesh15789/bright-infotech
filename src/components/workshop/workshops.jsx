import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './images.js';
import { motion } from "framer-motion";
import  FadeIn  from "../../variants.js";

const Workshops = () => {
  return (
    <>
      <section className='d-flex bg-light justify-content-center align-items-center py-5'>
        <div className='container ff'>
          <div className='row'>
            <motion.div
             variants={FadeIn("right", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true, amount: 0.9 }}
             className='col-lg-6 mb-4 mb-lg-0 pb-5'>
              <Carousel className='galleryslider'>
                {ExampleCarouselImage.map((image) => (
                  <Carousel.Item key={image.id} interval={1000}>
                    <img
                      className="d-block w-100 coursel-img img-fluid"
                      src={image.src}
                      alt={`Slide ${image.id}`}
                  
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
            <motion.div
             variants={FadeIn("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true, amount: 0.9 }}
             className="col-lg-6 d-flex flex-column justify-content-center ">
              <div className=' pt-2'>
                <h1 className='fw-bold'>Workshop At</h1>
              </div>
              <div className='content4 w-100 '>
                <h3>
                  International Competition arranged at <b className='college'>Sanjay Ghodawat University</b>, Kolhapur for <b className='college'>IOT and Web Based Application.</b>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshops;
