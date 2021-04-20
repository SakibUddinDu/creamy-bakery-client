import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    
    const [ reviews, setReviews] = useState([])

        useEffect(() => {
            fetch('http://localhost:5000/reviews')
                .then(res => res.json())
                .then(data => setReviews(data))
        }, []);
   

    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className=" text-uppercase text-center">Testimonial</h5>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} />)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;