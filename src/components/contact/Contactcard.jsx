import React, { useRef, useState } from 'react';
import Officestaff from './officestaf.js';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import FadeIn from "../../variants.js";
import "./contacts.css"

function Formdata() {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_phone: ''
    });
    const [validationMessages, setValidationMessages] = useState({
        email: '',
        phone: ''
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/; // This regex allows for international phone numbers
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(formData.from_email);
        const isPhoneValid = validatePhone(formData.from_phone);

        if (!isEmailValid || !isPhoneValid) {
            setValidationMessages({
                email: isEmailValid ? '' : 'Please enter a valid email address.',
                phone: isPhoneValid ? '' : 'Please enter a valid phone number.'
            });
            return;
        }

        emailjs.sendForm('service_woop5ns', 'template_rzf1hha', form.current, 'ZXYG_H3ro0foGcK9Z')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setFormData({
                        from_name: '',
                        from_email: '',
                        from_phone: ''
                    });
                    alert('Your form has been sent successfully');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section className='bg-light'>
            <motion.div 
                variants={FadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.9 }}
                className='d-flex align-items-center justify-content-center py-3'
            >
                <h1 className='fw-bold'>Request A Call Back</h1>
            </motion.div>
            <section className='d-flex align-items-center justify-content-center'>
                <div className='row container'>
                    <div className='col-lg-6 py-5 d-flex align-items-center justify-content-center'>
                        <motion.form
                            variants={FadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.9 }}
                            className='form border p-4'
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <label className='form-label'>
                                <input
                                    required
                                    placeholder=''
                                    type='text'
                                    className='form-control'
                                    name='from_name'
                                    value={formData.from_name}
                                    onChange={handleChange}
                                />
                                <span>First Name</span>
                            </label>
                            <label className='form-label'>
                                <input
                                    required
                                    placeholder=''
                                    type='email'
                                    className='form-control'
                                    name='from_email'
                                    value={formData.from_email}
                                    onChange={handleChange}
                                />
                                <span>Email</span>
                                {validationMessages.email && (
                                    <div className="text-danger">{validationMessages.email}</div>
                                )}
                            </label>
                            <label className='form-label'>
                                <input
                                    required
                                    type='tel'
                                    placeholder=''
                                    className='form-control'
                                    name='from_phone'
                                    value={formData.from_phone}
                                    onChange={handleChange}
                                />
                                <span>Contact Number</span>
                                {validationMessages.phone && (
                                    <div className="text-danger">{validationMessages.phone}</div>
                                )}
                            </label>
                            <button className='btn btn-warning mt-3' type='submit'>
                                <span className='text-light'>Submit</span>
                            </button>
                        </motion.form>
                    </div>
                    <div className='col-lg-6 pb-5 d-flex align-items-center justify-content-center'>
                        <main className='container py-5'>
                            <motion.div
                                variants={FadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.9 }}
                                className='row'
                            >
                                {Officestaff.map((val) => (
                                    <div key={val.id} className='col-xl-6 col-sm-6 mb-2'>
                                        <div className='card' style={{ backgroundColor: '#376d9c', boxShadow: '0px 1px 10px 2px black' }}>
                                            <div className='card-body'>
                                                <div className='text-center mb-3'>
                                                    <img src={val.image} alt='' className='img-fluid rounded-circle' style={{ width: '100px', height: '100px' }} />
                                                </div>
                                                <div className='text-center'>
                                                    <div className='mt-2'>
                                                        <h5 className='text-warning fs-6'>{val.Role}</h5>
                                                    </div>
                                                    <div>
                                                        <h6 className='text-light fw-bold'>{val.Name}</h6>
                                                        <p>
                                                            <a href={`tel:${val.phoneno}`} className='text-light fs-6  text-decoration-none'>
                                                                {val.phonelogo} {val.phoneno}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </main>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Formdata;
