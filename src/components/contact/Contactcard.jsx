import Officestaff from './officestaf.js';
import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';
function Formdata() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_woop5ns', 'template_rzf1hha', form.current, 'ZXYG_H3ro0foGcK9Z')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    alert('Your form has been sent successfully');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (

        <section className='bg-light'>
            <div className='d-flex  align-items-center justify-content-center py-3'>
                <h1 className='fw-bold'>Request A Call Back</h1>
            </div>
            <section className=' d-flex  align-items-center justify-content-center'>

                <div className='row container'>
                    <div className='col py-5 d-flex align-items-center justify-content-center'>
                        <form className='form border' ref={form} onSubmit={sendEmail}>

                            <label>
                                <input required placeholder='' type='text' className='input' name='from_name' />
                                <span>First Name</span>
                            </label>

                            <label>
                                <input required placeholder='' type='email' className='input' name='from_email' />
                                <span>Email</span>
                            </label>
                            <label>
                                <input required type='tel' placeholder='' className='input' name='from_phone' />
                                <span>Contact Number</span>
                            </label>
                            <button className='fancy bg-warning' type='submit'>
                                <span className='top-key'></span>
                                <span className='text text-light'>Submit</span>
                                <span className='bottom-key-1'></span>
                                <span className='bottom-key-2'></span>
                            </button>
                        </form>
                    </div>



                    <div className='col pb-5 fourboxes  d-flex align-items-center justify-content-center'>
                        <main className='container py-5'>
                            <div className='row'>
                                {Officestaff.map((val) => (
                                    <div key={val.id} className='col-xl-6 col-sm-6 mb-2' >
                                        <div className='card ' style={{ backgroundColor: '#376d9c', boxShadow: '0px 1px 10px 2px black' }}>
                                            <div className='card-body'>
                                                <div className='text-center mb-3 '>
                                                    <img src={val.image} alt='' className='img-fluid rounded-circle' style={{ width: '100px', height: '100px' }} />
                                                </div>
                                                <div className='text-center'>
                                                    <div className='mt-2'>
                                                        <h5 className='text-warning fs-6'>{val.Role}</h5>
                                                    </div>
                                                    <div>
                                                        <h6 className='text-light fw-bold'>{val.Name}</h6>
                                                        <p>
                                                            <a href={`tel:${val.phoneno}`} className='text-light fs-6'>
                                                                {val.phonelogo} {val.phoneno}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>    </div>

                </div >
            </section >
        </section>

    );
}

export default Formdata;
