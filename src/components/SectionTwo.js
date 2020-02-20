import React from 'react';
import mobilephones from '../images/Image_BrandDevelopment.jpg'

export const SectionTwo = () =>{
    return(
        <section className="sectionTwo">
            <div className="sectionDesc floatleft">
                <p className="sectionTitle">Brand<br />Development</p>
                <section className="sectionBodyText">
                    <p>
                        Our brand development process merges traditional brand planning methodologies
                        with a new world digital approach to developing brand.
                    </p>
                    <p>
                        Our process focuses on developing a brands position in market,
                        tone or voice, personality and communication platform.
                    </p>
                    <br />
                    <p>
                        <a href="/branddevelopment" className="sectionLink">View Related Work</a>
                    </p>
                </section>
            </div>
            <img className="sectionImg floatright" src={mobilephones} alt="Mobile phones" />
        </section>
    )
}