import React from "react"
import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright © 2023 Tree Top Insurance</div>
            <div className="col-lg-4 my-3 my-lg-0">
                {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a> */}
                <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/treetopinsuranceadvisors/" aria-label="Facebook" target="_blank"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/sandy-sleck-7705a71a/" aria-label="LinkedIn" target="_blank"><i className="fab fa-linkedin-in" /></a>
            </div>
            <div className="col-lg-4 text-lg-end">
                <NavLink className="link-dark text-decoration-none me-3" to="/privacy">Privacy Policy</NavLink>
                {/* <a className="link-dark text-decoration-none" href="#!">Terms of Use</a> */}
            </div>
            </div>
        </div>
        </footer>

    )
}

export default Footer