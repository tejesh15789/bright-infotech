import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './images.js';

const Workshops = () => {
  return (
    <>
      <section className='d-flex bg-light justify-content-center align-items-center py-5'>
        <div className='container ff'>
          <div className='row'>
            <div className='col-lg-6 mb-4 mb-lg-0 pb-5'>
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
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center ">
              <div className=' pt-2'>
                <h1 className='fw-bold'>Workshop At</h1>
              </div>
              <div className='content4 w-100 '>
                <h3>
                  International Competition arranged at <b className='college'>Sanjay Ghodawat University</b>, Kolhapur for <b className='college'>IOT and Web Based Application.</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshops;
