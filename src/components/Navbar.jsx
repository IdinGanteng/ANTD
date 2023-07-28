import React from 'react';
import logo from '../Assets/header-title.png';


const Navbar = () => {
    
    return (
        <div className='navbar container-fluid'>
            <div className='mt-1'>
                <a href='/'>
                 <img src={logo} alt='logo' className='logo'/>
                </a>
            </div>
        </div>
    )
}

export default Navbar;