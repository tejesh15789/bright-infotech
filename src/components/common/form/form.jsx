import React, { useState, useRef } from 'react';
import "./form.css";
import emailjs from '@emailjs/browser';

const Formcard = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const form = useRef();

  console.log(props.url);
  const validateMobile = (mobile) => {
    const mobilePattern = /^[6-9]\d{9}$/;
    return mobilePattern.test(mobile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!validateMobile(mobile)) {
      formErrors.mobile = 'Mobile number must be 10 digits long and start with a digit between 6 and 9.';
    }

    if (Object.keys(formErrors).length === 0) {
      // Form is valid
      alert('Form submitted successfully! and here is our Brochure');
      props.setClose(false);
      downloadPDF();
    } else {
      setErrors(formErrors);
    }

    // Email submission
    emailjs
      .sendForm('service_woop5ns', 'template_rzf1hha', form.current, 'ZXYG_H3ro0foGcK9Z')
      .then(
        () => {
          console.log('SUCCESS!');
          if (form.current) {
            form.current.reset();
          }
          alert('Your form has been sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleCloseForm = () => {
    props.setClose(false);
  };

  const helperfun  = (name)=>{
    const namefield = name.split("/");
    
    return namefield[2];
      }
      
  const downloadPDF = (url) => {
    const link = document.createElement('a');
    link.href = props.url; 
    link.download = helperfun(props.url); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='bg-light  mx-5 container rounded formback'>
        <section className="container py-2 px-4">
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <h3>Download Brochure & Enrole Now</h3>
            <button onClick={handleCloseForm} className="btn-close  bg-light" aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name='from_name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-group flex-nowrap mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <span className="input-group-text" id="addon-wrapping">@</span>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                id="inputEmail3"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name='from_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="inputMobile" className="col-sm-2 col-form-label">Mobile Number</label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  className="form-control"
                  id="inputMobile"
                  value={mobile}
                  name='from_phone'
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Formcard;
