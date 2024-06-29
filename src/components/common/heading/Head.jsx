import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Head = () => {
  return (
    <div>
        <section className='head'>
            <div className='container flexSB'>
                <div className="logo">
                  
                    <b>BRIGHT</b><br /> <span>INFOTECH</span>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/bright.infotch?mibextid=ZbWKwL"><i className="fa-brands fa-facebook icon img-fluid"></i></a>
                    <a href="https://www.instagram.com/bright_infotech_/"><i className="fa-brands fa-instagram icon img-fluid"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin icon img-fluid"></i></a>
                    <a href=""><i className="fa-brands fa-twitter icon img-fluid"></i></a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Head;