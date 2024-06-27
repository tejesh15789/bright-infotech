import React from 'react';
import Title from '../common/title/Title';
import "./about.css";
import homeAbout from './abouthomedata.js';
import Figure from 'react-bootstrap/Figure';


const AboutCard = () => {
    return (
        <>
            <section className=' d-flex justify-content-center'>
                <div className='container row  py-5 px-5'>

                    <div className="col-md py-5">

                        <Figure>
                            <Figure.Image
                                width={400}
                                height={400}
                                alt="171x180"
                                src="./img/umeshsir.jpg"

                            />
                            <Figure.Caption className='fs-3 text-light ff'>
                           <b className='fw-bold'> Mr. Umesh Thorat</b> - <b className='text-dark'> Director</b>
                            </Figure.Caption>
                        </Figure>
                    </div>


                    <div className="col-md">
                        <div>
                            <h1 className='fw-bold text-light'><b className='text-dark'>About</b> US</h1>
                        </div>
                        <div className="text-light ff">
                            <div>
                                <h3>WHAT WE DO .</h3>
                                <p className='fc-gray'>Bright Infotech is leading software training and placement institute in Pune we have placed 5000+ candidate in IT sector from last one year.
                                Bright infotech is the right place for you, whether you are looking for a job or an employer struggling with any recruitment needs. You can Focus on your core business and existing staff. We have access to a large pool of candidates Hence we are handling more than 200 fortune level clients all over Mumbai & Pune. Bright infotech is the recruitment and placement institute that has the industry contacts to fill any position. For businesses and candidates to think about us within the highest conceive a dynamic company that brings strategy and innovation to any recruitment need. </p>
                            </div>
                        </div>
                        <div className='ff fc-white'>
                            <div className='row'>
                                <div className='col-2 text-center fs-4 py-3 aboutmain-icon'>
                                    <span ><i class="fa-solid fa-book"></i></span>
                                </div>
                                <div className='col-10'>
                                    <h3><b className='text-dark'>Strategy</b> & Research.</h3>
                                    <p className='fc-gray'>We use best strategy and efforts to the candidates so that they can get thorough knowledge.</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-2 text-center fs-4 py-3 aboutmain-icon'>
                                    <span ><i class="fa-solid fa-robot"></i></span>
                                </div>

                                <div className='col-10'>
                                    <h3><b className='text-dark'> Automation</b> & Development</h3>
                                    <p className='fc-gray'>We provide automation and training to write skilled codes. </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </section>
        </>
    );
}

export default AboutCard;

