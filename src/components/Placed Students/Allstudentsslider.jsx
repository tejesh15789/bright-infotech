import React from 'react';
import placedstudentsdetails from "./placedstudentslist";


const Allstudentsslider = () => {
    return (
     
        <div className='container w-100 overflow-hidden py-4'>
        <div className='sliderph' >
          
                {placedstudentsdetails.map((val, index) => (
                    <div className="slider-tracks " key={index}>
                        <div className="slideph d-flex justify-content-center">
                            <img src={val.photo} alt={val.name} className='img-sliders'/>
                        </div>
                        <div className="text-center text-light">
                            <strong className="text-center">{val.name}</strong>
                            <p className="text-center">{val.role}</p>
                        </div>
                    </div>
                ))}
            
        </div>
        </div>
    )
}

export default Allstudentsslider

