import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Accordionsubjects = () => {
    return (
        <div className='w-100 bg-light pb-5'>
            <section className='container'>
                <div className='d-flex justify-content-center align-items-center py-5'>
                    <h1 className='fw-bold text-center'>
                        Our Courses <b style={{ color: "skyblue" }}>Curriculum</b>
                    </h1>
                </div>
                <Accordion defaultActiveKey={['0']} alwaysOpen className='w-100'>
                    <Accordion.Item eventKey="0" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Flutter</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Data Visualization</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>6 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col-md-6 col-12'>
                                <li>Learn Dart</li>
                                <li>State Management Architecture</li>
                                <li>State Management Architecture</li>
                                <li>Code Snippet Shortcuts</li>
                                <li>Breaking down UI into smaller widgets</li>
                            </ol>
                            <ol className='col-md-6 col-12'>
                                <li>State management architecture</li>
                                <li>Testing</li>
                                <li>IDE Shortcuts</li>
                                <li>Platform channel</li>
                                <li>Maintaining a project</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Python</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Full Stack</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>5 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="row">
                            <ol className="col-md-6 col-12">
                                <li>Introduction to Python</li>
                                <li>Data Types & Variables</li>
                                <li>Conditional Statement</li>
                                <li>Loops in Python</li>
                                <li>More on Data types</li>
                            </ol>
                            <ol className="col-md-6 col-12">
                                <li>Functions and Modules</li>
                                <li>Object Oriented Programming</li>
                                <li>File Handling</li>
                                <li>Regular Expression & Web Scraping</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Web Development</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Full Stack</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>8 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col-md-6 col-12'>
                                <li>HTML/CSS/JS</li>
                                <li>Git and GitHub</li>
                                <li>Browser DevTools</li>
                                <li>API (Application Programming Interface)</li>
                                <li>Authentication</li>
                            </ol>
                            <ol className='col-md-6 col-12'>
                                <li>MVC (Model, View, Controller)</li>
                                <li>Programming Languages (Backend)</li>
                                <li>Problem-Solving and Searching</li>
                                <li>Writing Tests</li>
                                <li>DevOps and Deployment</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Java</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Full Stack</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>4 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col-md-6 col-12'>
                                <li>Interface</li>
                                <li>Object-Oriented Programming</li>
                                <li>Data Types</li>
                                <li>Non-Primitive Data Types</li>
                                <li>Primitive Data Types</li>
                                <li>Executing in Java</li>
                                <li>Variables</li>
                            </ol>
                            <ol className='col-md-6 col-12'>
                                <li>Operators</li>
                                <li>Packages</li>
                                <li>Methods</li>
                                <li>Fields</li>
                                <li>Classes and Objects</li>
                                <li>Constructors</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Excel</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Data</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>2 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col-md-6 col-12'>
                                <li>Introduction To Excel</li>
                                <li>Formula and Function</li>
                                <li>Formula Referencing</li>
                                <li>Named Ranges</li>
                                <li>Table in Excel</li>
                                <li>AutoFill and Custom Lists</li>
                                <li>Conditional Formatting</li>
                                <li>Logical Functions</li>
                            </ol>
                            <ol className='col-md-6 col-12'>
                                <li>Reference Functions</li>
                                <li>Data Validation</li>
                                <li>Pivot Table</li>
                                <li>Data Visualization</li>
                                <li>What-if Analysis</li>
                                <li>Macros & VBA</li>
                                <li>Excel with AI</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Power BI</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Data Visualization</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>3 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col-md-6 col-12'>
                                <li>Introduction to Power BI</li>
                                <li>Power BI Desktop & Power Query</li>
                                <li>Modelling with Power BI</li>
                                <li>Data Analysis Expressions (DAX)</li>
                                <li>Data Visualization</li>
                            </ol>
                            <ol className='col-md-6 col-12'>
                                <li>Introduction to Power BI Dashboard, Q&A and Data Insights</li>
                                <li>Power BI Service</li>
                                <li>Power BI Direct Connectivity</li>
                                <li>Case Study/Project</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>SQL</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#Database</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>1 Week</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col'>
                                <li>SQL Launchpad</li>
                                <li>Crafting SQL Databases (DDL) & Mastering Data Control (DML)</li>
                                <li>Querying into Data (DQL)</li>
                                <li>Unlock the Built in Functions</li>
                                <li>Connecting Data for Insights</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className='mb-2'>
                        <Accordion.Header>
                            <div className='row w-100 d-flex justify-content-between align-items-center'>
                                <div className='col-md-9 col-8 mt-3'>
                                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                                        <p className='mb-1 mb-sm-0'>
                                            <b>Machine Learning</b>
                                        </p>
                                        <b className='border rounded-pill text-center mx-3 px-2 fw-bolder'>#ML</b>
                                    </div>
                                </div>
                                <div className='col-md-3 col-4'>
                                    <div className='d-flex align-items-center'>
                                        <i className="fa-regular fa-clock me-2"></i>
                                        <span>12 Weeks</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='row'>
                            <ol className='col-md-6 col-12'>
                                <li>Introduction to AI</li>
                                <li>Introduction to DL</li>
                                <li>Artificial Neural Network Deep Dive</li>
                                <li>Computer Vision</li>
                                <li>Computer Vision with OpenCV</li>
                                <li>Convolution Neural Network</li>
                            </ol>
                            <ol className='col-md-6 col-12'>
                                <li>Natural Language Processing</li>
                                <li>Recurrent Neural Network</li>
                                <li>RASA Chatbot</li>
                                <li>Introduction to Time Series Analysis</li>
                                <li>Weather Forecasting using ARIMA Model</li>
                                <li>Stock Price Prediction using Sequence Model</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    )
}

export default Accordionsubjects;
