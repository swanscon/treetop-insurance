import React from "react";
import { useEffect } from "react";


function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <section className="page-section bg-light" id="blog">
            <div className="container">
                <div className="text-center">
                <h2 className="section-heading text-uppercase">Blog</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
               
            </div>
            </section>         
           
        </div>
    )
}

export default Blog