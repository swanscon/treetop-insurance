import React from "react";
import { useEffect } from "react";


function Medicare() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <section className="page-section bg-light" id="blog">
            <div className="text-banner">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Retirement Health Care Planning</h2>
                    <h3 className="section-subheading text-width-m mobile-hidden">Making the transition to Medicare Insurance doesn't have to be complicated - but it can be one of the most important decisions you'll have as you near retirement. Tree Top Insurance is here to help you navigate your options, and really focus on what's important to you and your situation.</h3>
                </div>
            </div>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-subheading text-uppercase text-padding-top-s">Medicare Matters</h2>
                    <h3 className="section-subheading text-muted">You already know how important it is to have the best health care. As you reach the point to transition to Medicare on your 65th birthday, you'll have several options to choose from to meet that goal. We work with clients to answer questions on Medicare and the difference between Advantage and Supplemental Plans.</h3>
                    <div className="text-center text-padding-top-s">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Bcs6se5ONY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <hr className="text-padding-top-s"/>
                    <h2 className="section-heading text-muted text-uppercase">Senior Health Care</h2>
                </div>
                <div className="row text-center justify-content-evenly text-padding-top-xs">
                    <div className="col-md-5 text-padding-bottom-s">
                        <h4 className="my-3">MEDICARE</h4>
                        <img className="img-fluid" src="assets/img/photos/18.jpg" alt="..." />
                        <p className="text-muted text-padding-top-xs">We'll start with a conversation about  your current health care needs and how they will be served by basic Medicare (Part A (Hospital) and Part B Medical Insurance). Once you feel comfortable with how these parts work, we can discuss additional coverage you may want.</p>
                    </div>
                    <div className="col-md-5 text-padding-bottom-s">
                        <h4 className="my-3">MEDICARE HEALTH PLANS</h4>
                        <img className="img-fluid" src="assets/img/photos/17.jpg" alt="..." />
                        <p className="text-muted text-padding-top-xs">Most people supplement their Medicare policies with additional insurance - often called Gap, or Advantage Plans. With so many providers of this type of plan, it's important to understand the difference between your options and how they serve your needs.</p>
                    </div>
                </div>
                <div className="row text-center justify-content-evenly text-padding-top-xs">
                    <div className="col-md-5 text-padding-bottom-s">
                        <h4 className="my-3">PRESCRIPTION DRUG COVERAGE</h4>
                        <img className="img-fluid" src="assets/img/photos/16.jpg" alt="..." />
                        <p className="text-muted text-padding-top-xs">In addition to traditional healthcare, you'll want to make sure you get the best coverage for any medications you may need. Often called "Part D" coverage, we can help you understand what options you have, which drugs are covered and the associated costs.</p>
                    </div>
                    <div className="col-md-5 text-padding-bottom-s">
                        <h4 className="my-3">LONG TERM CARE INSURANCE</h4>
                        <img className="img-fluid" src="assets/img/photos/19.jpg" alt="..." />
                        <p className="text-muted text-padding-top-xs">Long Term Care insurance may be an important part of your financial plan for retirement. We can help you with the pros and cons of this coverage.</p>
                    </div>
                </div>
                <hr className="text-padding-top-s"/>
                <div className="text-center">
                    <h4 className="section-subheading text-muted">Contact us through one of the Medicare Center numbers below.</h4>
                </div>
                <div className="row text-padding-top-s">
                    <div className="col">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/Sandy.jpg" alt="..." />
                        <h4>Sandy Sleck</h4>
                        <p className="text-muted">Owner / Agent</p>
                        <ul className="list-inline">
                            <li>
                            <strong>Phone: </strong>
                            612-482-8639
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
                        <ul className="list-inline">
                            <li>
                            <strong>Phone: </strong>
                            763-373-7608
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </section>         
           
        </div>
    )
}

export default Medicare