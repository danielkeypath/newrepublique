import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedin, faYoutube, faSlideshare, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faLinkedin, faYoutube, faSlideshare, faInstagram);

export const AppFooter = () => {
    return (
        <div className="App-footer">
            <ul className="no-list">
                <li><FontAwesomeIcon icon={['fab', 'facebook-f']} className='brandicon' /></li>
                <li><FontAwesomeIcon icon={['fab', 'linkedin']} className='brandicon' /></li>
                <li><FontAwesomeIcon icon={['fab', 'youtube']} className='brandicon' /></li>
                <li><FontAwesomeIcon icon={['fab', 'slideshare']} className='brandicon' /></li>
                <li><FontAwesomeIcon icon={['fab', 'instagram']} className='brandicon' /></li>
            </ul>
        </div>
    );
}