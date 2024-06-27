import React from "react";
import Studentscards from "./studentcards";
const Placedcards = () => {
    return (
        <div className="w-100 ">
            <section className="homecart ">
                <div>
                    <h1>Some of our recent success stories</h1>
                </div>
                <div className="placedcardsbox">
                    {Studentscards.map((val) => (
                        <div className="card" key={val.id}>
                            <div className="img">
                                <img src={val.image} alt="{val.name}" />
                            </div>
                            <span className="fw-bold fs-6">{val.name}</span>
                            <span className="fs-6">{val.role}</span>
                            <p className="info">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Placedcards;



