import React from "react";
import placedstudentsdetails from "./placedstudentslist";

const Studentsslider = () => {
    return (
        <section className="sliderhome2 container  py-5 ">
            <main className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <div className="slidercards">
                    <div className="slidermain container">
                        {placedstudentsdetails.map((val, index) => (
                            <div className="box boximage" key={index}>
                                <div className="boximages">
                                    <img src={val.photo} alt={val.name} />
                                </div>
                                <div className="text-center">
                                    <strong className="text-dark">{val.name}</strong>
                                    <p className="text-dark">{val.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Studentsslider;
