import React from 'react';
import Footer from '../../Footer/Footer';
import Clients from '../Clients/Clients';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import Navbar from '../Header/Navbar/Navbar';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services/Services';
// import Testimonial from '../Testimonial/Testimonial';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeaderMain/>
            <Clients/>
            <OurProducts/>
            <Testimonials/>
            <Services/>
            <Footer/>
            
          
        </div>
    );
};

export default Home;