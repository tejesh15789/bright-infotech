import React from 'react'
import ExampleCarouselImage from "./images.js"

const Gallery = () => {
  return (
    <div>
    <section>
      <div className='d-flex justify-content-center my-4 text-dark fw-bold'>
        <h1 style={{color:"skyblue"}}> <b>Gallery</b></h1>
      </div>
      <div className='container'>
        <div className='row'>
          {ExampleCarouselImage.map((image) => (
            <div className=' col-sm-6 col-lg-4 col-12 mb-4' key={image.id}>
              <div className='gallerybox'>
                <img src={image.src} alt={image.title} className='img-fluid' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <style jsx>{`
      .gallerybox img{
        width: 300px;
        height: 220px;
        object-fit: cover;
      
        border-radius: 10px;
        box-shadow: 0px 1px 10px 1px white;

      }
    `}</style>
  </div>
  )
}

export default Gallery
