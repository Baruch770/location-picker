import React from 'react';
import './styles.css';
import Time from '../time/Time';
// import CompannyName  from '../companyName/CompanyName';


export default function Navbar() {
    return (
        <nav className="navbar">
            {/* <CompannyName /> */}
            <Time />
        </nav>
    )
}


