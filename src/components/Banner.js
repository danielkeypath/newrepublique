import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItemOne } from './CarouselItemOne';
import { CarouselItemTwo } from './CarouselItemTwo';

export const Banner = () =>{
    return(
        <Carousel interval={null} controls={false}>
            <Carousel.Item className="carouselItemOne">
                <CarouselItemOne />
            </Carousel.Item>
            <Carousel.Item className="carouselItemTwo">
                <CarouselItemTwo />          
            </Carousel.Item>
        </Carousel>
    )
}
