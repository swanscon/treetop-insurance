import React from "react";
import { useEffect } from "react";


function Quote() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <section className="page-section" id="contact">
            <div className="text-image-3 text-padding-top-l">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Request a Quote</h2>
                    <h3 className="section-subheading text-width-m">We can provide you a quote through whichever means you prefer. You can give us a call, send an email, visit our office, or use the form below.</h3>
                </div>
                </div>
                <div className="container">
                    {/* <div className="text-center">
                    <h2 className="section-heading text-uppercase">Request a Quote</h2>
                    <h3 className="section-subheading text-muted">We can provide you a quote through whichever means you prefer. You can give us a call, send an email, visit our office, or use the form below.</h3>
                    </div> */}
                
                    {/* * * * * * * * * * * * * * * **/}
                    {/* * * SB Forms Contact Form * **/}
                    {/* * * * * * * * * * * * * * * **/}
                    {/* This form is pre-integrated with SB Forms.*/}
                    {/* To make this form functional, sign up at*/}
                    {/* https://startbootstrap.com/solution/contact-forms*/}
                    {/* to get an API token!*/}
                    <form className="text-padding-top" id="contactForm">
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
                    <div className="text-center text-uppercase text-padding-top-s">
                            <h4>Contact Info</h4>
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
        </div>
   
    )
}

export default Quote