import React from 'react'
import { NavLink } from 'react-router-dom';

function navbarToggler() {
    const navbarToggle = document.body.querySelector('#navbarToggle');
    const navbarResponsive = document.body.querySelector('#navbarResponsive');
    if (!navbarToggle.hasAttribute('collapsed')) {
        navbarToggle.classList.add('collapsed');
        navbarToggle.ariaExpanded = false;
        navbarResponsive.classList.remove('show');
    } else {
        return;
    }
};

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" 
            aria-expanded="false" aria-label="Toggle navigation" id="navbarToggle">
            Menu
            <i className="fas fa-bars ms-1" />
            </button>
            <NavLink to="/"><img className="img-nav-m navbar-toggler" src="assets/img//logos/tree.png" alt="..." /></NavLink>
            <NavLink to="/"><img className="img-icon-left icon-hide" src="assets/img/logos/tree.png" alt="..." id="treeLink"/></NavLink>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/" onClick={navbarToggler}>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/about" onClick={navbarToggler}>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/medicare" onClick={navbarToggler}>Medicare</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/quote" onClick={navbarToggler}>Request a Quote</NavLink></li>
                    {/* <li className="nav-item"><NavLink className="nav-link header-nav" to="/">Insurance Solutions</NavLink></li> */}
                    {/* <li className="nav-item"><NavLink className="nav-link header-nav" to="/blog">Blog</NavLink></li> */}
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/appointment" onClick={navbarToggler}>Book an Appointment</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/contact" onClick={navbarToggler}>Contact</NavLink></li>
                </ul> 
            </div>
        </div>
    </nav>
    )
}

export default Nav