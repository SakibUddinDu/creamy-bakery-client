import React from 'react';
import ServicesData from '../../../../Resources/FakeData/ServicesData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';



const Services = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className=" text-uppercase text-center">Our Services</h5>
                   {/* <h1>What Our Clients  Says </h1> */}
               </div>
               <div className="card-deck mt-5 row">
                    {
                        ServicesData.map(service => <ServiceCard service={service} />)
                    }
                </div>
           </div>
       </section>
    );
};

export default Services;