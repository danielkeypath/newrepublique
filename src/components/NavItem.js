import React, {useState} from 'react';

export const NavItem = ({path, label}) => {
    const [highlight, setHighlight] = useState(false);
    return(
        <a className="nav-link" href={path} onMouseOver={() => setHighlight(true)} onMouseOut={() => setHighlight(false)} >
            {label}
            <span className={highlight? 'show' : ''}>{label}</span>
        </a>
    )
}

