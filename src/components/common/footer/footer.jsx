import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {
    return (
        <div className='d-flex  justify-content-center  bg-light'>
            <section className="w-100 container footercontent row px-5 pt-5">
                <div className='block1 col'>
                    <main className="addressblock">
                        <div>
                            <h4 className="fw-bold">BRIGHT INFOTECH</h4></div>
                        <div><p className='text-gray'>Near Kunjir House Lane No. 3,
                            Shree Ram Society
                            Khandagle Complex,
                            Office No.01, 2 nd Floor,
                            Kharadi, Pune,
                            Maharashtra 411014</p></div>
                        <div><p  className='text-gray'><b>Phone:</b> +91 9975486929, +91 9665970279, +91 8806041000</p>
                           <p  className='text-gray'><b>Email: </b>hr@brightinfo.in</p></div>
                    </main>
                </div>
                <div className='block2 col'>
                    <main className="usefull">
                        <div>
                            <h4 className='fw-bold px-4'>Useful Links</h4>
                        </div>
                        <div>
                            <ul className='text-gray usefull-link'>
                                <li ><Link to="/" className='text-gray'>Home</Link></li>
                                <li><Link to="/about" className='text-gray'>About</Link></li>
                                <li><Link to="/Services" className='text-gray'>Training Program</Link></li>
                                <li><Link to="/Placed Students" className='text-gray'>PlacedStudents</Link></li>
                                <li><Link to="/Intership" className='text-gray'>Intership</Link></li>
                                <li><Link to="/Hiring Partners" className='text-gray'>HiringPartners</Link></li>
                                <li><Link to="/WorkShops" className='text-gray'>WorkShops</Link></li>
                                <li><Link to="/Contact" className='text-gray'>Contact</Link></li>
                            </ul>
                        </div>
                        <div></div>
                    </main>
                </div>
                <div className='block3 col'>
                    <div>
                        <h4 className='fw-bold px-4'>Traning Programs</h4>
                    </div>
                    <div>
                        <ul >
                            <li><Link to="/" className='text-gray'> Web Design</Link></li>
                            <li><Link to="/about" className='text-gray'>Web Development</Link></li>
                            <li><Link to="/Services" className='text-gray'>Product Management</Link></li>
                            <li><Link to="/Placed Students" className='text-gray'>Marketing</Link></li>
                            <li><Link to="/Intership" className='text-gray'>Graphic Design</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='block4 col'>
                    <div>
                        <h4 className='fw-bold'>Our Social Networks</h4>
                    </div>
                    <div className="socials row gap-2 px-3 ">
                        <i className="fa-brands fa-facebook iconss img-fluid"></i>
                        <i className="fa-brands fa-instagram iconss img-fluid"></i>
                        <i className="fa-brands fa-linkedin iconss img-fluid"></i>
                        <i className="fa-brands fa-twitter iconss img-fluid"></i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
