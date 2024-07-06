import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Footer from "./footer"

const Policyreturn = () => {
    return (
        <section className=''>
             <div className='py-3  bg-light d-flex justify-content-center align-items-center' >
                <Row className='d-flex justify-content-between align-items-center container '>
                    <Col><h1 className='text-center fw-bold'>Return and Refund Policy</h1></Col>
                    <Col><img src="./img/policy/refund.png" alt="" width={200} height={200} /></Col>
                </Row>
            </div>
            <Container>
                <Row className='text-light py-5'>
                  
                    <p>Our Return and Refund Policy was last updated 1 st Jan 2023</p>
                    <ul>
                        <li style={{ "list-style-type": "square" }}>The fees will be non-refundable and non-transferable in any circumstances.
                        </li>
                        <li style={{ "list-style-type": "square" }}>Batch or Course change is strictly not allowed.</li>
                        <li style={{ "list-style-type": "square" }}>Bright Info Tech provides corporate level training.</li>
                        <li style={{ "list-style-type": "square" }}>Training will be provided according to the specified curriculum.</li>
                        <li style={{ "list-style-type": "square" }}>Candidates will get interview calls from different job portals.</li>
                    </ul>
                    <p>All rights reserved to Bright InfoTech*

                    </p>
                    <p>If you have any queries/ doubt regarding payment, please contact us at hr@brightinfo.in</p>

                    <p>The following terms are applicable for any products that You purchased with Us.</p>
                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h3>Definitions</h3>
                    <p>For the purposes of these Terms and Conditions:</p>
                    <ul>
                        <li style={{"list-style-type": "square"}}>Company (referred to as either the Company,We,Us or Our in this Agreement) refers to Bright InfoTech</li>
                        <li style={{"list-style-type": "square"}}>Goods refers to the items offered for sale on the Service.</li>
                        <li style={{"list-style-type": "square"}}>Orders means a request by You to purchase Goods from Us.</li>
                        <li style={{"list-style-type": "square"}}>Service refers to the Website.</li>
                        <li style={{"list-style-type": "square"}}>Website refers to [brightinfo.in], accessible from https://brightinfo.in/</li>
                        <li style={{"list-style-type": "square"}}>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>

                    </ul>
                    <h2>Contact Us
                    </h2>
                    <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                    <ul>
                        <li style={{"list-style-type": "square"}}>By visiting this page on our website: https://brightinfo.in/</li>
                        <li style={{"list-style-type": "square"}}>By sending us an email: hr@brightinfo.in</li>
                    </ul>
                </Row>
            </Container>
            <Footer/>
        </section>
    )
}

export default Policyreturn
