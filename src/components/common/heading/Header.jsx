import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-modal"
import Formcard from "../form/form";

const Header = () => {
    const [isOpen,setOpen] = useState(false)
    
    return (
        <><Head />
            <Modal isOpen={isOpen} style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.5)' } }} onRequestClose={() => setOpen(false)} className='modalform d-flex justify-content-center align-items-center'>
                <Formcard setClose={setOpen} />
            </Modal>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container bgc-gray-size ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon border-none text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2 gap-4 text-decoration-none color">
                            <li className="nav-item "><Link to="/" className=" text-decoration-none">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className=" text-decoration-none">About</Link></li>
                            <li className="nav-item"><Link to="/Services" className=" text-decoration-none">SoftWareTraining</Link></li>
                            <li className="nav-item"><Link to="/Placed Students" className=" text-decoration-none">PlacedStudents</Link></li>
                            <li className="nav-item"><Link to="/Intership" className=" text-decoration-none">Intership</Link></li>
                            <li className="nav-item"><Link to="/Hiring Partners" className=" text-decoration-none">HiringPartners</Link></li>
                            <li className="nav-item"><Link to="/WorkShops" className=" text-decoration-none">WorkShops</Link></li>
                            <li className="nav-item"><Link to="/Contact" className=" text-decoration-none">Contact</Link></li>
                        </ul>

                    </div>
                    <span className="navbar-text  d-flex justify-content-center">
                        <button className=' fs-4 fw-bold' onClick={()=> setOpen(true)}>Get Intership</button>
                    </span>
                </div>
            </nav>
        </>
    )
}
export default Header