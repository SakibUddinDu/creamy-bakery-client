
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider4 from '../../../../Resources/images/Slider4.png';
import Slider5 from '../../../../Resources/images/Slider5.png';
import Slider6 from '../../../../Resources/images/Slider6.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img style={{height:"400px"}}
            className="d-block w-100"
            src={Slider4}
            alt="First slide"
          />
          <Carousel.Caption className="text-color fs-1 fw-bold">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:"400px"}}
            className="d-block w-100"
            src={Slider5}
            alt="Second slide"
          />
      
      <Carousel.Caption className="text-color fs-1 fw-bold">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-dark">
        <img style={{height:"400px"}}
            className="d-block w-100"
            src={Slider6}
            alt="Third slide"
          />
      
      <Carousel.Caption className="text-color fs-1 fw-bold">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default HeaderMain;