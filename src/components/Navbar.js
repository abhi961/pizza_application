import React from 'react';

const Navbar =()=> {
    return (
        <>
        <div className="header-menu">
            <div className="brand-logo">
                <img src="/images/logo.png" alt="logo"/>
            </div>
            <div className="header-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Conatct Us</a></li>
                </ul>
            </div>
        </div>
        </>

    );
}
export default Navbar;