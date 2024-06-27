import React from 'react'
import Workshopmain from "./workshopmain"
import Workshops from "./workshops"
import Gallery from "./gallery"




const Workshophome = () => {
    return (
        <div>
            <section>
                <Workshopmain />
            </section>
            <section>
                <Workshops />
            </section>
            <section>
                <Gallery />
            </section>
        </div>
    )
}

export default Workshophome
