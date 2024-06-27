
import React from "react";
import "./adds.css";

const Whatapp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917028994535"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <button className="whatappbtn" onClick={handleWhatsAppClick}>
      <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className="whatapplogo"/>
      </button>
    </>
  );
};

export default Whatapp;





