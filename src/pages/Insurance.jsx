import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


function Insurance() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                <h2 className="section-heading text-uppercase">Insurance Solutions</h2>
                <h3 className="section-subheading text-muted">We offer a full range of insurance products, designed to help you and your family meet your goals. From life insurance to health insurance, auto and property and everything in between, we can build a customized insurance solution meant just for you!</h3>
                </div>
                <div className="text-center">
                <h3 className="section-heading text-uppercase">Our Process</h3>
                <h3 className="section-subheading text-muted">While most people contact us with a specific insurance need, we take the time to discuss your goals and find out more about you and your family. We want to make sure you get what you really need! Then we research the best products available and build out options for you to consider. When you are a client of Tree Top Insurance, you can rest assured that we are always here for you. Our “White Glove” service means that we pick up the phone when you call. We’ll help you navigate through any issue – no matter how small or big -we are here for you. It’s all part of our vision “to help you protect what you’ve grown”.</h3>
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
                        <p>We know that providing a safe and secure home for your family very important to our customers.  Making sure that you are covered in case of storm damage or theft is important to us – there’s no room for guess work  in deciding what kind of coverage is going to give you the greatest peace of mind for you and your family.  We have several options available to offer our customers – we’ll put together the best package at the best price for you.</p>
                        <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                        <div className="text-padding-top-s">
                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <p>As an ever-growing segment of our population earns the right to be called "senior," the industry has responded with innovative options to help fill the changing coverage needs of everyone who is turning the page on a new chapter in their life.  From Medium-Gap to Long-Term Care, from Life to Auto for seniors, Tree Top provides expert guidance and planning customized to your particular needs and intentions. As always, our guiding principal is your best outcome!</p>
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
                            <div className="text-center text-padding-top-s"><NavLink to="/quote"><button className="btn btn-secondary btn-xl text-uppercase"  data-bs-dismiss="modal" type="button">Get a Quote!</button></NavLink></div>
                            <div className="text-padding-top-s">
                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
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
            <div className="py-5">
                <div className="container">
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
    )
}

export default Insurance