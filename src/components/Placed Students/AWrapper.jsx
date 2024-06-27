import React from 'react';
import awrapper from './successdata.js';


const AWrapper = () => {
  return (
    <>
     <section className='container text-center awrapper-box'>
    <div className="row py-2 my-3">
        {awrapper.map((val) => (
            <div className='col-12 col-sm-6 col-lg-3' key={val.id}>
                <div className="row">
                    <div className="col-12">
                        <img src={val.cover} alt={val.title} width={80} height={70} />
                    </div>
                    <div className="col">
                        <h1 className='fw-600 text-light fs-4'><b>{val.count}</b></h1>
                        <h3 className='fw-600 text-light fs-6'><b>{val.title}</b></h3>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>

    </>
  )
}

export default AWrapper;
