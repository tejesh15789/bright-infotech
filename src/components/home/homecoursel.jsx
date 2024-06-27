import React from 'react'
import "./homecoursel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Homecoursel = () => {
    return (
        <div className=' w-100'>
            <section className='container'>
               
            <div id="carouselExampleDark" className="carousel carousel-dark slide h-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="./img/Flutter.jpg" className="d-block w-100 img-fluid"  height={500}  alt="..."/>
                           
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./img/merndev2.png" className="d-block w-100 img-fluid" height={500} alt="..."/>
                            
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./img/mis2.png" className="d-block w-100 img-fluid" height={500} alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./img/testing2.png" className="d-block w-100 img-fluid" height={500} alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./img/dotnet.png" className="d-block w-100 img-fluid" height={500} alt="..."/>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            </section>
        </div>
    )
}

export default Homecoursel
