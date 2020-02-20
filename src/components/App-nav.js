import React, {useState} from 'react';
import logo from '../images/LOGO_Big_RGB.png';
import { NavItem } from './NavItem';

export const AppNav = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <a href='/'><img src={logo} alt="New Republique Logo" className="companyLogo" /></a>
            <nav className="App-nav navbar navbar-expand-lg navbar-light bg-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={show?'collapse navbar-collapse show':'collapse navbar-collapse'} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavItem label='about us' path='/aboutus' />    
                        </li>
                        <li className="nav-item">
                            <NavItem label='work' path='/work' />
                        </li>
                        <li className="nav-item">
                            <NavItem label='services' path='/services' />
                        </li>
                        <li className="nav-item">
                            <NavItem label='blog' path='/blog' />
                        </li>
                        <li className="nav-item">
                            <NavItem label='research' path='/research' />
                        </li>
                        <li className="nav-item">
                            <NavItem label='careers' path='/careers' />
                        </li>
                        <li className="nav-item">
                            <NavItem label='contact us' path='/contactus' />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}