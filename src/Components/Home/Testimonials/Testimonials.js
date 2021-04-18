import React from 'react';
import TestimonialData from '../../../Resources/FakeData/TestimonialData';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';



const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className=" text-uppercase text-center">Testimonial</h5>
                   {/* <h1>What Our Clients  Says </h1> */}
               </div>
               <div className="card-deck mt-5 row">
                    {
                        TestimonialData.map(testimonial => <Testimonial testimonial={testimonial} />)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;