
import React, { useState } from 'react';
import Hero from "./hero/Hero";
import AboutCard from '../about/AboutCard';
import Contentserver from "../services/onlineCources"
import Formcard from "../common/form/form"
import Footer from "../common/footer/footer"
import Maplocation from "../contact/map"
import Formdata from "../contact/Contactcard"

import Slidercompanies from "../sliderpartners/slidercompanies"
import Workshops from "../workshop/workshops"
import Accordionsubjects from "../services/accordion"
import Backimg from "../services/backimg"
import Abouhome from "../about/abouhome"
import Homecoursel from "./homecoursel"
import Allstudentsslider from "../Placed Students/Allstudentsslider"

export const Home = () => {



  return (

    <div>

      <Homecoursel />
      <Abouhome />
      <Backimg />
      <Accordionsubjects />

      <Allstudentsslider />


      <Workshops />
      <Slidercompanies />
      <Formdata />
      <Maplocation />
      <Footer />





    </div>




  )
}

export default Home;



