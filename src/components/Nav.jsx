import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div className="container">
            {/* <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggle">
            Menu
            <i className="fas fa-bars ms-1" />
            </button>
            <img className="img-nav navbar-toggler" src="assets/img//logos/treetop.png" alt="..." />
            <NavLink to="/"><img className="img-icon-left icon-hide" src="assets/img/logos/tree.png" alt="..." id="treeLink"/></NavLink>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/quote">Request a Quote</NavLink></li>
                    {/* <li className="nav-item"><NavLink className="nav-link header-nav" to="/">Insurance Solutions</NavLink></li> */}
                    {/* <li className="nav-item"><NavLink className="nav-link header-nav" to="/blog">Blog</NavLink></li> */}
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/appointment">Book an Appointment</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link header-nav" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav