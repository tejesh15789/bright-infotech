import React from "react";
import "./cources.css"

import Courcessub from "./courcesCart";



const Contentserver = () => {
    return (
        <div className="d-flex justify-content-center w-100 bg-light">
        <div className="row container  ">
            <section className="col-12 bg-light  py-5 d-flex flex-column justify-content-center ">
                <div className="d-flex justify-content-center align-items-center py-3">
                    <h1 className="fw-bold fs-1 ">In-Demand Courses For <b style={{ color: "darkorange" }}>Quick Job</b> </h1>
                </div>
                <div className="">
                    <div className="cartboxes row  gap-3">
                        {Courcessub.map((val) => (
                            <div className="box-int col col-sm-6 col-md-4  border border-2 border-dark rounded" key={val.id}>
                                <div className="logo2 d-flex justify-content-center align-items-center mt-2">{val.logo}</div>
                                <div className="tittle-main  d-flex justify-content-center align-items-center mt-2 ">
                                    <h3 className="fw-bold fs-6 tittle2">{val.title}</h3>
                                </div>
                                <div className="img-time">
                                    <p className="desccart">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        
            

        </div>
        </div>

    )
}
export default Contentserver;





