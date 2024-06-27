import React from "react";
import "./placed.css";
import Placedcards from "./Placedcard.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import AWrapper from "./AWrapper.jsx"
import Studentsslider from "./placedstudentsslider.jsx"



const Placedstudents = () => {
    return (
        <div className="d-flex justify-content-center w-100 ">
        <div className="w-100 container">
            <section className="row  pb-5">
            <div className="col ">
                <div className="text-center">
                    <div className="row  py-5 w-100">
                        <h2 className="fw-bold  col-12" style={{ color: "skyblue" }}>
                            <b className="text-light " > 5000+</b> Students Use <b className="text-light">BRIGHT</b> to Upscale their
                                Skillset and stand out 
                        </h2>
                        <div className="col col-sm-12">
                            <p className=" py-4 w-100 text-light fw-bold">See how Bright helped students create impactful carrier that drives upskillings and fosters growth</p>
                        </div>
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-center pb-5">
                    <div class="row mx-5 gap-3">
                        <button className=" col-lg-8  btn btn-light fw-bold" type="button">Inquire Now </button>
                        <button className=" col-lg-8 btn btn-light fw-bold" type="button">Download Brochure  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="filelogo">
                        <path fill="#90caf9" d="M33.2,10H17c-1.7,0-3,1.3-3,3v31c0,1.7,1.3,3,3,3h23c1.7,0,3-1.3,3-3V19.8c0-0.5-0.2-1-0.6-1.4l-7.8-7.8	C34.2,10.2,33.7,10,33.2,10z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M22.1,42.5h13.4c1.7,0,3-1.3,3-3v-25h-7c-1.1,0-2-0.9-2-2v-7"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M24,5.5H12.5c-1.7,0-3,1.3-3,3v31c0,1.7,1.3,3,3,3h3.9"></path><line x1="38.5" x2="29.5" y1="14.5" y2="5.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                        </svg></button>
                    </div>
                </div>
            </div>
            <div className="placedimagehome  col d-flex justify-content-center">
                    <img  src="./img/placedstuimg.png" width={500} alt="" />
            </div>
            </section>

                <section>
                <Placedcards/>
                <AWrapper/> 
                <Studentsslider/>
                
                </section>
            
           
           
            
        </div>
        </div>
    )
}


export default Placedstudents;