import React from 'react';
import "./cources.css";
import Durationtime from "./duration-time";
import Button from 'react-bootstrap/Button';

function Backimg() {
    return (
        <div className='d-flex justify-content-center align-items-center py-4'>
            <section className='container'>
                <div className="row py-4">
                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold lh-base" style={{ color: "skyblue" }}>
                            An Industry-Oriented <b className="text-light">Programming Languages & Full Stack Developer Course</b> with 100% Job Guarantee
                        </h1>

                        <div className="row gap-3 h-auto py-3">
                            {Durationtime.map((val) => (
                                <div className="col-12 col-sm-3 col-md-3  d-flex flex-column align-items-center services-three rounded" key={val.id}>
                                    <div className='text-center'>
                                        <h3 className="fs-6">{val.title}</h3>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center ">
                                        <img src={val.logo} alt={val.title} style={{ height: '20px', width: '20px', objectFit: 'contain' }} />
                                        <span className=' fw-bolder text-center '>{val.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-2 mt-2">
                            <Button variant="light" size="lg" className="fw-bold col-12">
                                Download Brochure 
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="filelogo">
                                    <path fill="#90caf9" d="M33.2,10H17c-1.7,0-3,1.3-3,3v31c0,1.7,1.3,3,3,3h23c1.7,0,3-1.3,3-3V19.8c0-0.5-0.2-1-0.6-1.4l-7.8-7.8	C34.2,10.2,33.7,10,33.2,10z"></path>
                                    <path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M22.1,42.5h13.4c1.7,0,3-1.3,3-3v-25h-7c-1.1,0-2-0.9-2-2v-7"></path>
                                    <path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M24,5.5H12.5c-1.7,0-3,1.3-3,3v31c0,1.7,1.3,3,3,3h3.9"></path>
                                    <line x1="38.5" x2="29.5" y1="14.5" y2="5.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 py-5 d-flex justify-content-center align-items-center">
                        <img src="./img/services.png" alt="Services" className='img-fluid' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Backimg;
