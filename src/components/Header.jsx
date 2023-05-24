import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="masthead" id="mainHeader">
        <div className="container">
            {/* <div className="masthead-heading text-uppercase">It's Nice To Meet You</div> */}
            <NavLink to="/"><img className="img-fluid" src="assets/img//logos/treetop.png" alt="..." /></NavLink>
            {/* <div className="masthead-subheading">Your Insurance Solution!</div> */}
            {/* <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a> */}
        </div>
        </header>

    )
}

export default Header