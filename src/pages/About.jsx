import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className="page-section" id="about">
            <div className="text-image-2 text-padding-top-l">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Helping People for Over 40 Years</h2>
                    <h3 className="section-subheading text-width-m">We have been providing insurance to individuals, families, and businesses for decades.  We are pleased to be an independent agency, which partners with a variety of insurance companies.  This has allowed us to shop for our clients and find them the best, most affordable policies.</h3>
                </div>
                </div>
            <div className="container">
                
                <ul className="timeline text-padding-top-l">
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/thumbnails/1.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="subheading">Our Mission</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">To help individuals, families, and businesses get the appropriate insurance. I am building my business based on references from satisfied clients, so my motivation is 100% to bring value rather than meeting sales goals or product quotas. My philosophy is that, if I do what is right for the client, then I know I’ve done what’s right for Tree Top Insurance. It’s that simple.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/thumbnails/4.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="subheading">Our History</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">We have been helping communities with a customer-driven model. With solid partners and access to quality carriers along with knowing how to take advantage of the best discounts has saved my clients hundreds of dollars per year. I have worked for larger agencies, insurance carriers, and small brokers, and one thing remained constant, I enjoy building and maintaining real relationships with clients.</p></div>
                    </div>
                </li>
                <li className="timeline">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/thumbnails/2.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="subheading">Our Process</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">While most people contact us with a specific insurance need, we take the time to discuss your goals and find out more about you and your family. We want to make sure you get what you really need! Then we research the best products available and build out options for you to consider. When you are a client of Tree Top Insurance, you can rest assured that we are always here for you. Our “White Glove” service means that we pick up the phone when you call. We’ll help you navigate through any issue – no matter how small or big -we are here for you. It’s all part of our vision “to help you protect what you’ve grown”.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
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
                        <img className="rounded-circle img-fluid" src="assets/img/logos/tree.png" alt="..." />
                    </div>
                </li>
                
                </ul>
                <div className="text-center text-padding-top">
                    <h3 className="section-heading text-uppercase">Be a Part of Our Story!</h3>
                </div>
                <div className="text-center text-padding-top-s"><NavLink to="/contact"><button className="btn btn-primary btn-xl text-uppercase">Contact Us</button></NavLink></div>
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
                <div className="py-5">
                <hr/>
                <div className="container text-padding-top-s">
                    <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Partners</h2>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

    )
}

export default About