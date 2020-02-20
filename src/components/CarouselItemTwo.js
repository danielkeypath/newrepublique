import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import branding from '../images/Icon_CRO.png';
import conversion from '../images/Icon_Strategy.png';
import uxdesign from '../images/Icon_UXDesign.png';


export const CarouselItemTwo = () =>{
    return(
        <Carousel.Caption>
            <p className="sectionTitle">Our services</p>
            <p className="sectionBodyText">
                The imaginative crafting of psychology, art, technology and
                business to create beautiful ideas, products and services.
            </p>
            <ul className="no-list icons sectionBodyText">
                <li>
                    <img src={branding} alt="Branding, Brand Strategy"></img>
                    <p>Branding, Brand Strategy</p>
                </li>
                <li>
                    <img src={conversion} alt="Conversion, Rate Optimisation"></img>
                    <p>Conversion, Rate Optimisation</p>
                </li>
                <li>
                    <img src={uxdesign} alt="UX, Design, Development"></img>
                    <p>UX, Design, Development</p>
                </li>
            </ul>
        </Carousel.Caption>
    )
}