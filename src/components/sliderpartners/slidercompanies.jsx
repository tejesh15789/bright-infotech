import React from "react";
import "./slidercom.css";
import companies from "./slidercomp.js"
import companies2 from "./slidercomp2.js"

const Slidercompanies = () => {
    return (
        <>
        <div className="w-100">
            <section className="sliderhome container mb-4">
                <div className="sliderheading d-flex flex-column  justify-content-center align-items-center pt-4 container">
                    <h1 style={{ color: "skyblue" }}>With Great <b className="text-light">Outcomes</b> </h1>
                    {/* <h4>Placed Students</h4> */}
                </div>
                <main className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <div className="slidercards ">
                    <div className="slidermain">
                        {companies.map(val =>(
                           
                            <div className="boximage d-flex flex-row"  key={val.id}>
                                <img src={val.logo} alt="company-logo"  />
                            </div>
                            
                        ))}
                    </div>
                </div>
                <div className="slidercards2">
                    <div className="slidermain2">
                        {companies2.map(val =>(
                           
                            <div className="boximage2 d-flex flex-row"  key={val.id}>
                                <img src={val.logo} alt="company-logo"  />
                            </div>
                            
                        ))}
                    </div>
                </div>
                </main>
            </section>
            </div>

        </>
    )
}
export default Slidercompanies;

