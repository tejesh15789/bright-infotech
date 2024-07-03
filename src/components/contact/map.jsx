import React from "react";
import Button from 'react-bootstrap/Button';


const Maplocation = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "+917028994535"; 
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
      };
      const googlemaps = ()=>{
        const mapurl = "https://www.google.com/maps/place/Bright+Infotech/@21.068007,82.752529,3z/data=!4m6!3m5!1s0x4b0420e0893437c3:0x34175296d54f3cc5!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11l2m3krb8?hl=en&entry=ttu";
        window.open(mapurl,"_blank");
      }
    return (

        <div>
            <section className="googlemap container">
                <div className="ourlocation d-flex justify-content-center mt-4">
                    <h1 className="text-bold text-light">OUR <b className="text-warning"> LOCATION </b></h1>
                </div>

                <div className="stateloc d-flex px-5 align-items-center gap-3 " >
                    <div className="border d-flex justify-content-center align-items-center text-light bg-warning">
                        <i className="fa-solid fa-location-dot d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', fontSize: '30px' }}></i>
                    </div>
                    <h3 className="fw-semibold pt-3 text-light">Pune</h3>
                </div>

                <hr />

                <section className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12  mb-4">
                        <div className="addressloc d-flex px-4 py-3 align-items-center">
                            <div>
                                <img
                                    width="25"
                                    height="25"
                                    src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/external-office-home-office-photo3ideastudio-flat-photo3ideastudio.png"
                                    alt="office icon"
                                />
                            </div>
                            <h5 className="pt-2 fw-semibold text-light">ADDRESS</h5>
                        </div>

                        <div className="px-4">
                            <p className="text-light">Bright Infotech, Shreeram society, lane no.3 khandagle complex, kharadi bypass pune-411014</p>
                            <p className="clocktime gap-2 text-light">
                                <img
                                    src="https://img.icons8.com/?size=100&id=rKEYSosGdrkP&format=png&color=000000"
                                    alt="clock icon"
                                    width={30}
                                    height={30}
                                />
                                <b className="fw-semibold">Hours:</b> 9am - 9pm (Everyday)
                            </p>
                        </div>

                        <div className="d-grid gap-2 px-4">
                            <Button variant="warning" size="md" className="text-light" onClick={handleWhatsAppClick}>
                                Contact Us On Whatsapp <i className="fab fa-whatsapp"></i>
                            </Button>
                            <Button variant="light" size="md" className="text-warning">
                                Talk to us <i className="fas fa-phone"></i>
                            </Button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12  mb-4 pb-4">
                        <h3 className="text-light pt-3 fs-5"><span className="text-warning"><i className="fas fa-photo-film"></i></span> LOCATION</h3>
                        <hr />
                        <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
                            <iframe
                                title="Google Map"
                                className="embed-responsive-item"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.93121235915356!2d73.9369666834074!3d18.563155446546464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e1c956d759%3A0x20a43fa4e5e3a460!2sSoftGrid%20Info!5e0!3m2!1sen!2sin!4v1719994870729!5m2!1sen!2sin"
                                allowFullScreen="yes    "
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                width={400}
                                height={300}
                            ></iframe>
                        </div>
                        <div className="pt-3 d-flex justify-content-center">
                            <Button variant="light" size="md" className="text-light fw-semibold bg-warning w-75" onClick={googlemaps}>
                                Get Direction On Google Map
                                <img width="25" height="25" src="https://img.icons8.com/ultraviolet/40/marker.png" alt="marker" />
                            </Button>
                        </div>
                    </div>
                </section>       
            </section>
        </div>
    )
}

export default Maplocation;