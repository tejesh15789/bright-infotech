import React, { useState } from "react";
import "./about.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Team from "./team.js";

const Ourteam = () => {
    return (
        <>
            <section className="bg-light container-fluid">
                <main className="container py-5">
                    <div className="ourteam-heading d-flex justify-content-center align-items-center">
                        <h1 className="fw-bold fs-1">Our Management Team</h1>
                    </div>
                    <div className="ourteam-photos  d-flex justify-content-center align-items-center">
                        <div className="row py-5 ">
                            {Team.map(val => (
                                <div className="col col-xl-3 col-md-4 pb-5" key={val.id}>
                                    <div className="team-image  text-center py-2">
                                        <img src={val.image} alt="" width={150} height={150} className="rounded-circle" />
                                    </div>
                                    <div className="team-name text-center py-2">
                                        <h4 className="fw-bold fs-5">{val.name}</h4>
                                        <p className="fw-semibolder ">{val.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Ourteam;
