import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

export const StayInTouch = () =>{
    return(
        <section className="stayInTouch">
            <p className="sectionTitle">Stay in touch</p>
            <br />
            <section className="sectionBodyText">
                <p>
                    Each month we release a newsletter on how we do what we do.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Form>
                    <FormControl type="email" placeholder="Enter your email" />
                </Form>
                <br />
                <p>
                    <a href="/signuptonewsletter" className="sectionLink">Sign Up to Our Newsletter</a>
                </p>
            </section>            
        </section>
    )
}