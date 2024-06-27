import React from 'react'

import Contentserver from "./onlineCources"
import Backimg from './backimg';
import Thewayweteach from "./thewayweteach"
import Accordion from "./accordion"

export const ServiceHome = () => {
  return (
    
    <div>
        <Backimg/>
        <Contentserver />
        <Thewayweteach/>
        <Accordion/>
        
         
    </div>
        
    
  )
}
export default ServiceHome;