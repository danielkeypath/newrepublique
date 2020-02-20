import React from 'react';
import bulb from '../images/Image_DigitalBusiness.jpg';

export const SectionOne = () =>{
    return(
        <section className="sectionOne">
            <img className="sectionImg floatleft" src={bulb} alt="Bulb light" />
            <div className="sectionDesc floatright">
                <p className="sectionTitle">Digital Business<br />Strategy</p>            
                <section className="sectionBodyText">
                    <p>
                        We work with many organisations to research and assess potential digital,
                        mobile and new technology business models that can help them differentiate,
                        create new revenues or reduce the cost of delivery.
                    </p>
                    <p>
                        Many organisations that approach us don't have the background, skill or know
                        how to identify and assess how their organisation can take advantage of
                        digital opportunities.
                    </p>
                    <br />
                    <p>
                        <a href="/digitalbusinessstrategy" className="sectionLink">View Related Work</a>
                    </p>
                </section>
            </div>
        </section>
    )
}