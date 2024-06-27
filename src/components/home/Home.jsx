
 import React,{useState} from 'react';
import Hero from "./hero/Hero";
import AboutCard from '../about/AboutCard';
import Contentserver from "../services/onlineCources"
// import { Form } from 'react-bootstrap';
import Formcard from "../common/form/form"
import Modal from "react-modal"; 
import Footer from "../common/footer/footer"
import Maplocation from "../contact/map"
import Formdata from "../contact/Contactcard"
import AWrapper from "../Placed Students/AWrapper"
import Workshopmain from "../workshop/workshopmain"
import Slidercompanies from "../sliderpartners/slidercompanies"
import Studentsslider from "../Placed Students/placedstudentsslider"
import Workshops from "../workshop/workshops"
import Accordionsubjects from "../services/accordion"
import Backimg from "../services/backimg"
import Abouhome from "../about/abouhome"
import Homecoursel from "./homecoursel"

export const Home = () => {
  
  

  return (

    <div>
      {/* <Hero /> */}
      {/* <AWrapper/> */}
      <Homecoursel />
      <Abouhome/>
      <Backimg/>
      <Accordionsubjects/>
      <Studentsslider/>
    
      {/* <Workshopmain/> */}
     
      <Workshops/>
      <Slidercompanies/>
      <Formdata/>
      <Maplocation/>
      <Footer/>

      
      {/* <AboutCard/>
      <Contentserver/>  */}
    </div>
        
  
      
  
  )
}

export default Home;



