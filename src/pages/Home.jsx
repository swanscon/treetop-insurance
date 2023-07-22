import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const divRef = useRef();
    return (
        <div>
        <section className="page-section" id="home">
            <div className="text-banner">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">A FULL SERVICE INSURANCE PROVIDER</h2>
                    <h3 className="section-subheading text-width-m mobile-hidden">As a full service Insurance Provider, Tree Top Insurance provides the insurance products you need. From standard home, health and auto insurance to business, health and long term care insurance, we offer a range of solutions for you at any stage of life. </h3>
                </div>
            </div>
            
            <div className="container">
                <div className="row text-center text-padding-top-s justify-content-evenly">
                    <img className="img-thumbnail-sm" src="assets/img/photos/1.jpg" alt="..." />
                    <h3 className="my-3">Protecting What You've Grown</h3>
                </div>
                <div className="container-fluid text-center">
                        <button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase" 
                            onClick={() => {
                                divRef.current.scrollIntoView({behavior: 'smooth'})
                            }}>Learn More</button>
                        <NavLink to="/contact"><button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase">Contact Us</button></NavLink>
                </div>
                <div className="row text-center justify-content-evenly text-padding-top">
                    <div className="col-md-4 text-padding-bottom-s">
                        <img className="img-fluid" src="assets/img/photos/16.jpg" alt="..." />
                        <h4 className="my-3">Income Products</h4>
                        <p className="text-muted">You've worked hard towards your retirement. Let's make sure you have an income plan in place to support your retirement goals. With several products available we can help you meet your goals.</p>
                        <a className="portfolio-link" data-bs-toggle="modal" href="#homeModal1">
                            <button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Find Out More</button>
                        </a>
                    </div>
                    <div className="col-md-4 text-padding-bottom-s">
                        <img className="img-fluid" src="assets/img/photos/17.jpg" alt="..." />
                        <h4 className="my-3">Medicare</h4>
                        <p className="text-muted">Making good decisions about health care after 65 is important, and you can use all the help you can get. Tree Top Insurance can help you navigate the complexities of  Medicare, Advantage plans and prescription drug plans.</p>
                        {/* <a className="portfolio-link" data-bs-toggle="modal" href="#homeModal2"> */}
                            <NavLink to="/medicare"><button className="mx-2 my-2 btn btn-secondary btn-xl text-uppercase">Find Out More</button></NavLink>
                        {/* </a> */}
                    </div>
                </div>
                {/* <div className="row text-center justify-content-evenly text-padding-top">
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
                </div> */}
            <section className="page-section bg-light" id="portfolio">
            <hr/>
            <div className="container" ref={divRef}>
                <div className="text-center text-padding-top-s">
                <h3 className="section-heading text-uppercase">Insurance Solutions</h3>
                <h3 className="section-subheading text-muted">We offer a full range of insurance products, designed to help you and your family meet your goals. From life insurance to health insurance, auto and property and everything in between, we can build a customized insurance solution meant just for you!</h3>
                </div>
                <div className="row justify-content-evenly">
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 1*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Home and Renter's Insurance</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-house fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/1.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 2*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Life Insurance</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-user fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/2.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 3*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Auto Insurance</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-car fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/3.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 4*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Health Insurance</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-heart fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/4.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 5*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Senior Coverage</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-user fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/5.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 6*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Commercial and Business</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-file fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/7.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* Portfolio item 7*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Umbrella Insurance</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal7">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-umbrella fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/6.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* Portfolio item 8*/}
                    <div className="portfolio-item">
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-subheading">Cyber Coverage</div>
                    </div>
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal8">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-computer fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="assets/img/cards/8.webp" alt="..." />
                    </a>
                    <p className="text-subcaption text-secondary">Click image to learn more.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>         
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="modal-body">
                        {/* Project details*/}
                        <h2 className="text-uppercase">Home and Renter's Insurance</h2>
                        <p className="item-intro text-muted">Protect your greatest asset and get home insurance today.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/cards/1.webp" alt="..." />
                        <p>We know that providing a safe and secure home for your family is very important to our customers.  Making sure that you are covered in case of storm damage or theft is important to us – there’s no room for guess work  in deciding what kind of coverage is going to give you the greatest peace of mind for you and your family.  We have several options available to offer our customers – we’ll put together the best package at the best price for you.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Life Insurance</h2>
                            <p className="item-intro text-muted">Protect your loved ones and get life insurance today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/2.webp" alt="..." />
                            <p>Life Insurance is the best way to make sure your family is taken care of in the event of your death. It’s a simple statement that most agree with but finding the right life insurance policy is not a simple process!  With so many types of Life Insurance  - Term, Whole, Universal and Variable – you deserve to work with someone who can objectively lay out the options and explain the pros and cons in a way you can understand them. Tree Top Insurance Advisors aren’t specifically incented to recommend any one particular product over another. We help you get the best Life Insurance to meet your unique needs.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Auto Insurance</h2>
                            <p className="item-intro text-muted">Protect your vehicle and get auto insurance today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/3.webp" alt="..." />
                            <p>Several factors go into determining your monthly premium - Not all auto insurance policies are created equally! As an insurance broker, Tree Top Insurance can offer a policy that is perfect for you and your family by shopping various carrier’s auto insurance products. We aren’t limited to just one standard policy with basic options. If you’ve got an unusual situation, we can find an option that works for you!</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Health Insurance</h2>
                            <p className="item-intro text-muted">Protect your lvoed ones and get health insurance today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/4.webp" alt="..." />
                            <p>Shopping for health insurance can be overwhelming and frustrating. Comparing different policies with a variety of premiums, coverage limitations, deductibles and copays takes time and focus. At Tree Top Insurance , we start the conversation with your needs and situation, offering only the best options for health insurance to meet your criteria. We’ll do the hard work, so you can focus on what matters most – your family’s health and wellness.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Senior Coverage</h2>
                            <p className="item-intro text-muted">Protect your health and get coverage today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/5.webp" alt="..." />
                            <p>As an ever-growing segment of our population earns the right to be called "senior," the industry has responded with innovative options to help fill the changing coverage needs of everyone who is turning the page on a new chapter in their life.  From Medigap to Long-Term Care, from Life to Auto for seniors, Tree Top provides expert guidance and planning customized to your particular needs and intentions. As always, our guiding principal is your best outcome!</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Commercial and Business</h2>
                            <p className="item-intro text-muted">Protect your business and get proper insurance today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/7.webp" alt="..." />
                            <p>It’s hard work running a business, and your to-do list is long. The last thing you want to worry about is protecting your company from losses associated with accidents, fraud, and disasters. Let Tree Top Insurance put together a Business Owner’s Policy or Commercial Solution package that meets your protection needs. We work with a variety of carriers for liability, property damage, and business interruption – let us take care of the details so you can focus on your customers, your employees, and your business.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Umbrella Insurance</h2>
                            <p className="item-intro text-muted">Protect yourself and get umbrella insurance today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/6.webp" alt="..." />
                            <p>Aren’t you covered by the insurance you already pay for?  Why do I need even more? An Umbrella policy extends the coverage limits that your current policies offer for things like injuries, accidents and damages.  It also covers claims that may not be covered under your other policies, such as false arrest, imprisonment or slander. Let Tree Top Advisors build an insurance package the provides the right levels of coverage for your specific needs.</p>
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
            <div className="portfolio-modal modal fade" id="portfolioModal8" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="modal-body">
                            {/* Project details*/}
                            <h2 className="text-uppercase">Cyber Coverage</h2>
                            <p className="item-intro text-muted">Protect your information and get cyber coverage today.</p>
                            <img className="img-fluid d-block mx-auto" src="assets/img/cards/8.webp" alt="..." />
                            <p>Businesses need coverage in the event of both data theft and data loss. But increasingly, individuals are exposed to similar risks. Working from home can blur the line between business and personal liability. And remember, no matter how often you use your computer or phone, your personal data that may be exposed. Tree Top is here to help assess your risk, outline your options, and find the best coverage for you at the best price.</p>
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
                <div className="text-center text-uppercase text-padding-top-s">
                        <NavLink to="/contact"><button className="mx-2 my-2 btn btn-primary btn-xl text-uppercase">Contact Us</button></NavLink>
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
                        <ul className="list-inline">
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
                        <ul className="list-inline">
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