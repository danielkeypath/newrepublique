import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItemOne } from './CarouselItemOne';
import { CarouselItemTwo } from './CarouselItemTwo';

export const Banner = () =>{
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
        console.log(e, selectedIndex);
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return(
        <Carousel interval={null} controls={false} direction={direction} onSelect={handleSelect}>
            <Carousel.Item className="carouselItemOne">
                <CarouselItemOne />
            </Carousel.Item>
            <Carousel.Item className="carouselItemTwo">
                <CarouselItemTwo />          
            </Carousel.Item>
        </Carousel>
    )
}
