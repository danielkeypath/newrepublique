import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselItemOne = () =>{
    return(
        
            <Carousel.Caption>
                <p className="sectionTitle">Brand Strategy</p>
                <p className="sectionBodyText">Curabitur lobortis id loren id bibendum. Ut id consectetur magna.
                    Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
                    Vestibulum nec erat ut mi sollicitudin portitor id sit amet risus.
                    Nam tempus vel odio vitae aliquam. In imperdiet eros.
                </p>
                <p>
                    <a href="/brandstrategy" className="sectionLink">View Related Work</a>
                </p>
            </Carousel.Caption>
    )
}