import React from "react";
import { useEffect } from "react";


function Retirement() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <section className="page-section bg-light" id="retirement">
            <div className="container">
                <div className="text-center">
                <h2 className="section-heading text-uppercase">Income Solutions</h2>
                <h3 className="section-subheading text-muted">At Tree Top Insurance, we will work with you to develop the confidence and knowledge you need to make financial decisions that will affect your family in the future. We offer a wide variety of insurance and financial solutions that will help ease your concerns about achieving retirement goals.</h3>
                </div>
               <div className="text-center row">
                    <div className="col">
                        <h4 className="text-uppercase text-padding-top-s">**IMAGE HERE**</h4>
                    </div>
                    <div className="col">
                        <h4 className="text-uppercase text-padding-top-s">Your retirement awaits!</h4>
                        <p className="text-muted">Whether it's 6 months away or 15 years in the future, planning for retirement can be stressful. Tree Top Insurance is here to work with you to create a realistic plan that works for you and your loved ones. Our product offerings are designed for both income and security.</p>
                    </div>
               </div>

               <div className="row text-center justify-content-evenly text-padding-top-s">
                    <div className="col-md-4 text-padding-bottom-s">
                        <h4 className="my-3">Annuities</h4>
                        <img className="img-fluid" src="assets/img/photos/16.jpg" alt="..." />
                        <p className="text-muted">Annuities provide dependable retirement income. They can also give you accumulation potential, plus the opportunity for tax-deferred growth.</p>
                    </div>
                    <div className="col-md-4 text-padding-bottom-s">
                        <h4 className="my-3">Whole Life Insurance Policies</h4>
                        <img className="img-fluid" src="assets/img/photos/17.jpg" alt="..." />
                        <p className="text-muted">Whole life, a form of permanent life insurance that builds cash value, can buttress investment portfolios and even boost retirement income if used correctly.</p>
                    </div>
                </div>
                <div className="row text-center justify-content-evenly text-padding-top-s">
                    <div className="col-md-4 text-padding-bottom-s">
                        <h4 className="my-3">Long Term Care Insurance</h4>
                        <img className="img-fluid" src="assets/img/photos/16.jpg" alt="..." />
                        <p className="text-muted">Long Term Care insurance may be an important part of your financial plan for retirement. We can help you with the pros and cons of this coverage.</p>
                    </div>
                    <div className="col-md-4 text-padding-bottom-s">
                        <h4 className="my-3">Medicare</h4>
                        <img className="img-fluid" src="assets/img/photos/17.jpg" alt="..." />
                        <p className="text-muted">The rising cost of health care is something that everyone's concerned about. We can help you make the best choices for Medicare, supplemental insurance and prescription drug coverage.</p>
                    </div>
                </div>

            </div>
            </section>         
           
        </div>
    )
}

export default Retirement