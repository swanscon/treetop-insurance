import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
        <section className="page-section" id="home">
            <div className="text-image-1 text-padding-top-l">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">A FULL SERVICE INSURANCE PROVIDER</h2>
                    <h3 className="section-subheading text-width-m">As a full service Insurance Provider, Tree Top Insurance provides the insurance products you need. From standard home, health and auto insurance to business, health and long term care insurance, we offer a range of solutions for you at any stage of life. </h3>
                    
                </div>
            </div>
            <div className="container">
                <div className="container-fluid text-center text-padding-top-s">
                        <NavLink to="/insurance"><button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase">Learn More</button></NavLink>
                        <NavLink to="/contact"><button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase">Contact Us</button></NavLink>
                </div>
                <div className="row text-center justify-content-evenly text-padding-top">
                    <div className="col-md-4 text-padding-bottom-s">
                        <img className="img-fluid" src="assets/img/photos/16.jpg" alt="..." />
                        <h4 className="my-3">Income Products</h4>
                        <p className="text-muted">You've worked heard towards your retirement. Let's make sure you have an income plan in place to support your retirement goals. With several products available we can help you meet your goals.</p>
                        <a className="portfolio-link" data-bs-toggle="modal" href="#homeModal1">
                            <button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Find Out More</button>
                        </a>
                    </div>
                    <div className="col-md-4 text-padding-bottom-s">
                        <img className="img-fluid" src="assets/img/photos/17.jpg" alt="..." />
                        <h4 className="my-3">Medicare</h4>
                        <p className="text-muted">Making good decisions about health care after 65 is important, and you can use all the help you can get. Tree Top Insurance can help you navigate the complexities of  Medicare, Advantage plans and prescription drug plans.</p>
                        <a className="portfolio-link" data-bs-toggle="modal" href="#homeModal2">
                            <button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Find Out More</button>
                        </a>
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
        {/* Modal 1 */}
        <div className="portfolio-modal modal fade" id="homeModal1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="modal-body">
                        {/* Project details*/}
                        <h2 className="text-uppercase">Income Products</h2>
                        <p className="item-intro text-muted">We offer a wide variety of insurance and financial solutions that will help ease your concerns about achieving retirement goals.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/photos/16.jpg" alt="..." />
                        <h4 className="text-uppercase">Your retirement awaits!</h4>
                        <p>Whether it's 6 months away or 15 years in the future, planning for retirement can be stressful. Tree Top Insurance is here to work with you to create a realistic plan that works for you and your loved ones. Our product offerings are designed for both income and security. </p>
                        <h4 className="text-uppercase">Income Solutions</h4>
                        <ul class="list-inline">
                            <li>
                                Annuities
                            </li>
                            <li>
                                Whole Life Insurance Policies
                            </li>
                            <li>
                                Long Term Care Insurance
                            </li>
                            <li>
                                Medicare
                            </li>
                        </ul>
                        <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-primary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                        <div className="text-padding-top-s">
                        <button className="btn btn-secondary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                            <i className="fas fa-xmark me-1" />
                            Close
                        </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>       
        {/* Modal 2 */}
        <div className="portfolio-modal modal fade" id="homeModal2" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="modal-body">
                        {/* Project details*/}
                        <h2 className="text-uppercase">Retirement Health Care Planning</h2>
                        <p className="item-intro text-muted">Making the transition to Medicare Insurance doesn't have to be complicated - but it can be one of the most important decisions you'll have as you near retirement.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/photos/17.jpg" alt="..." />
                        <h4 className="text-uppercase">Medicare Matters</h4>
                        <p>You already know how important it is to have the best health care. As you reach the point to transition to Medicare on your 65th birthday, you'll have several options to choose from to meet that goal. We work with clients to answer questions on Medicare, the difference between Advantage and Supplemental Plans, as well.</p>
                        <h4 className="text-uppercase">Senior Health Care</h4>
                        <ul class="list-inline">
                            <li>
                                Medicare
                            </li>
                            <li>
                                Medicare Health Plans
                            </li>
                            <li>
                                Prescription Drug Coverage
                            </li>
                            <li>
                                Long Term Care Insurance
                            </li>
                        </ul>
                        <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-primary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                        <div className="text-padding-top-s">
                        <button className="btn btn-secondary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                            <i className="fas fa-xmark me-1" />
                            Close
                        </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>   
{/* Closing div */}
        </div>

    )
}

export default Home