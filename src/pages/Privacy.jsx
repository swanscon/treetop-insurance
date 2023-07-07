import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center text-padding-top">
                    <h2 className="section-heading text-uppercase">Privacy Policy</h2>
                    <p className="text-muted">Our company is committed to keeping your personal information secure and private.</p>
                    <h6 className="section-subheading text-muted">This privacy notice discloses the privacy practices for Tree Top Insurance and treetopinsurance.com. This privacy notice applies solely to information collected by this website, except where stated otherwise. It will notify you of the following:</h6>
                    <ul className="list-normal text-padding-top-xs">
                        <li>What information we collect</li>
                        <li>With whom it is shared</li>
                        <li>How it can be corrected</li>
                        <li>How it is secured</li>
                        <li>How policy changes will be communicated</li>
                        <li>How to address concerns over misuse of personal data</li>
                    </ul>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Information Collection, Use, and Sharing</h3>
                    <h3 className="section-subheading text-muted">When you fill out a web form, email us, or chat with us, you are voluntarily giving us information. This might include an email address, contact information, physical address, company information, phone number, and any other information pertinent for an insurance quote. We will not sell or rent this information to anyone. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., for an insurance quote with a carrier. Unless you ask us not to, we may contact you via email in the future to tell you about insurance options, new products or services, or changes to this privacy policy.</h3>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Your Access to and Control Over Information</h3>
                    <h3 className="section-subheading text-muted">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number provided on our website:</h3>
                    <ul className="list-normal text-padding-top-xs">
                        <li>See what data we have about you, if any</li>
                        <li>Change/correct any data we have about you</li>
                        <li>Have us delete any data we have about you</li>
                        <li>Express any concern you have about our use of your data</li>
                    </ul>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Security</h3>
                    <h3 className="section-subheading text-muted">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page. While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job are granted access to personally identifiable information. The computers/servers on which we store personally identifiable information are kept in a secure environment.</h3>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Cookies</h3>
                    <h3 className="section-subheading text-muted">We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to start from stratch in sharing your information.  We will not use your cookies to track and target your interests. And we will not share your cookies with third-parties.</h3>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Links</h3>
                    <h3 className="section-subheading text-muted">This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</h3>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Surveys & Contests</h3>
                    <h3 className="section-subheading text-muted">From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.</h3>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Notification of Changes</h3>
                    <h3 className="section-subheading text-muted">Whenever material changes are made to the privacy notice, we will send you an email 30 days before the effective date of the new privacy policy.</h3>
                </div>
                <div className="text-center text-padding-top-s">
                    <h3 className="section-heading text-uppercase">Contact</h3>
                    <h3 className="section-subheading text-muted">If you feel that we are not abiding by this privacy policy, you should contact us immediately.</h3>
                    <p className="text-muted"><strong>Effective Date: 9/6/2019</strong></p>
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
                <div className="py-5"></div>
            </div>
            </section>      
    )
}

export default Privacy