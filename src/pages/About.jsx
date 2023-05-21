import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                <h2 className="section-heading text-uppercase">Helping People for Over 40 Years</h2>
                <h3 className="section-subheading text-muted text-width-m">We have been providing insurance to individuals, families, and businesses for decades.  We are pleased to be an independent agency, which partners with over a variety of insurance companies.  This has allowed us to shop for our clients and find the best, most affordable policy for them.  It's an easy experience for people and businesses since we do the work in getting a multitude of quotes!</h3>
                </div>
                <ul className="timeline">
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/thumbnails/1.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="subheading">Our Mission</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">To help individuals, families, and businesses get the appropriate insurance.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/thumbnails/2.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="subheading">Our History</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">We have been helping communities with a customer-driven model.</p></div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/thumbnails/3.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="subheading">Our Story</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">My then 8 year old granddaughter, E, named the agency/brokerage – as we were walking outside hand in hand on a beautiful spring morning and talking about opening an agency. E thought it would be a great idea and looked up and said “Call it Tree Top Insurance.” I asked her how she came up with that name and she replied “Easy Nana, we love trees and you are the best top insurance agent!” So now we had the name but needed a logo - she drew a willow tree! So the name and tree became digitized and the logo was born!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                    <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                    </h4>
                    </div>
                </li>
                </ul>
                <div className="text-center text-padding-top"><NavLink to="/contact"><button className="btn btn-secondary btn-xl text-uppercase">Contact Us</button></NavLink></div>
                <div className="text-center text-uppercase text-padding-top-s">
                        <div>
                            <strong>Phone:</strong> 612-875-1382
                        </div>
                        <div>
                            <strong>Email:</strong> sandy@treetopins.com
                        </div>
                        <div>
                            <strong>Address:</strong> 1382 Maplewood Dr, Long Lake, Minnesota 55356
                        </div>
                </div>
            </div>
        </section>

    )
}

export default About