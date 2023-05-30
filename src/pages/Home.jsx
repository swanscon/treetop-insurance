import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className="page-section" id="home">
            <div className="container">
                <div className="text-image-1 text-padding-top-l">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">A FULL SERVICE INSURANCE PROVIDER</h2>
                    <h3 className="section-subheading text-width-m">As a full service Insurance Provider, Tree Top Insurance provides the insurance products you need. From standard home, health and auto insurance to business, health and long term care insurance, we offer a range of solutions for you at any stage of life. </h3>
                    
                </div>
                </div>
                <div className="container-fluid text-center text-padding-top-s">
                        <NavLink to="/insurance"><button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase">Learn More</button></NavLink>
                        <NavLink to="/contact"><button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase">Contact Us</button></NavLink>
                    </div>
                <div className="row text-center justify-content-evenly text-padding-top">
                    <div className="col-md-4 text-padding-bottom-s">
                        <img className="img-fluid" src="assets/img/photos/16.jpg" alt="..." />
                        <h4 className="my-3">Income Products</h4>
                        <p className="text-muted">You've worked heard towards your retirement. Let's make sure you have an income plan in place to support your retirement goals. With several products available we can help you meet your goals.</p>
                        <NavLink to="/retirement"><button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Learn More</button></NavLink>
                    </div>
                    <div className="col-md-4 text-padding-bottom-s">
                        <img className="img-fluid" src="assets/img/photos/17.jpg" alt="..." />
                        <h4 className="my-3">Medicare</h4>
                        <p className="text-muted">Making good decisions about health care after 65 is important, and you can use all the help you can get. Tree Top Insurance can help you navigate the complexities of  Medicare, Advantage plans and prescription drug plans.</p>
                        <NavLink to="/medicare"><button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Learn More</button></NavLink>
                    </div>
                </div>
                <div className="row text-center justify-content-evenly text-padding-top">
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-user fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Life</h4>
                    <p className="text-muted">Tree Top Insurance offers many Life Insurance options – and most importantly help you make the right choice for your goals.</p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-house fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Home</h4>
                    <p className="text-muted">We help you navigate all of the options for all of your properties and Renter's Insurance. Our goal is to give you the peace of mind you want with the coverage and pricing you need.</p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-car fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Auto</h4>
                    <p className="text-muted">Not all auto insurance policies are created equal! Several factors go into determining your monthly premium and our advisors will help create the right level of protection for you and your family. </p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-heart fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Health</h4>
                    <p className="text-muted">Having the right health insurance policy is important for you and your family. We work with you to find the right coverage, providers and cost to give you the peace of mind you need.</p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-user fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Senior</h4>
                    <p className="text-muted">From Medi-Gap insurance to Long Term Care and much more, seniors are going strong! Helping to navigate the coverage options available is the hallmark of the caring, professional approach at Tree Top!</p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-umbrella fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Umbrella</h4>
                    <p className="text-muted">Aren’t you covered by the insurance you already pay for?  Why do I need even more? An Umbrella policy extends the coverage limits that your current policies offer for things like injuries, accidents and damages. </p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-file fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Business</h4>
                    <p className="text-muted">As a business owner, you need to protect what you’ve grown. Tree Top Insurance Advisors offers a full range of commercial insurance products from Business Owner Policies, Benefit packages,  Short Term Disability and more.</p>
                </div>
                <div className="col-md-4 text-padding-bottom-s">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-computer fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="my-3">Cyber Insurance</h4>
                    <p className="text-muted">Whether it's coverage for loss or liability for your business, work-related issues when working from home, or personal mitigation against cyber attacks, connecting with the world brings both benefits and risks.  Explore your coverage options...</p>
                </div>
                </div>
                
                <div className="text-center text-uppercase text-padding-top-s">
                        <NavLink to="/contact"><button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Contact Us</button></NavLink>
                        <div className="text-padding-top-s">
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

export default Home