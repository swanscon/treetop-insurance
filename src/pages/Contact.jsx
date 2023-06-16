import React from "react";
import { useEffect, useRef } from "react";


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const divRef = useRef();
    return (
        <div>
            <section className="page-section" id="contact">
            <div className="text-image-5 text-padding-top-l">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-width-m">We value talking to you and understanding your insurance needs.</h3>
                    
                </div>
                </div>
                <div className="container">
                    {/* <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">We value talking to you and understanding your insurance needs.</h3>
                    </div> */}
                
                <div className="text-center text-padding-top">
                <button className="btn btn-primary btn-xl text-uppercase" id="anchorButton"
                        onClick={() => {
                            divRef.current.scrollIntoView({behavior: 'smooth'})
                        }}>Contact Form</button>
                </div>
                <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">You have unique needs - we take the time to listen and find the best solutions for you. Call soon for an insurance review!</h3>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/Sandy.jpg" alt="..." />
                        <h4>Sandy Sleck</h4>
                        <p className="text-muted">Owner / Agent</p>
                        <p className="text-muted">With over 40 years of experience in the insurance industry, Sandy Sleck has a passion for helping her clients meet their goals. Owning Tree Top Insurance allows Sandy to provide the best solutions and offer the personal outstanding service to her clients – which is what differentiates her from the rest.</p>
                        {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fas fa-phone" /></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fas fa-envelope" /></a> */}
                        <ul className="list-inline">
                            <li>
                            <strong>Phone: </strong>
                            612-875-1382
                            </li>
                            <li>
                            <strong>Email: </strong>
                            sandy@treetopinsurance.com
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/Ann.jpg" alt="..." />
                        <h4>Ann Turner</h4>
                        <p className="text-muted">Agent</p>
                        <p className="text-muted">Ann is an amazing upbeat, fun, caring person. After 30 years in healthcare, Ann recently worked very hard to get her insurance license to help people find their best options for healthcare and retirement income and succession planning. Ann is married and a mother of three adult children.</p>
                        {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fas fa-phone" /></a> */}
                        <ul className="list-inline">
                            <li>
                            <strong>Phone: </strong>
                            763-607-6122
                            </li>
                        </ul>
                        </div>
                    </div>

                    </div>
                    <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Feel free to reach out to us using the 
                    <span className="clickable" id="anchorButton"
                        onClick={() => {
                            divRef.current.scrollIntoView({behavior: 'smooth'})
                        }}> contact form </span>
                     or with the information above.</p></div>
                    </div>
                </div>
            </section>
                    <form className="text-padding-top-s" id="contactForm" ref={divRef}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                        <div className="form-group">
                            {/* Name input*/}
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" required/>
                        </div>
                        <div className="form-group">
                            {/* Email address input*/}
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" required/>
                        </div>
                        <div className="form-group mb-md-0">
                            {/* Phone number input*/}
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone"/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            {/* Message input*/}
                            <textarea className="form-control" id="message" placeholder="Your Message *" required/>
                        </div>
                        </div>
                    </div>
                    {/* Submit Button*/}
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
                    </form>
                </div>
            </section>
            
        </div>
    )
}

export default Contact