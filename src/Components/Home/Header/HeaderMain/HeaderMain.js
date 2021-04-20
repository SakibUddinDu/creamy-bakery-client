import React from "react";
import { Carousel } from "react-bootstrap";
import Slider4 from "../../../../Resources/images/Slider4.png";
import Slider5 from "../../../../Resources/images/Slider5.png";
import Slider6 from "../../../../Resources/images/Slider6.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src={Slider4}
          alt="First slide"
        />
        <Carousel.Caption className="text-color fs-1 fw-bold">
          <small>Fresh && Delicious</small>
          <h3>Cake and Pastry</h3>
          <p>Premium Quality && Testy Products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src={Slider5}
          alt="Second slide"
        />

        <Carousel.Caption className="text-color fs-1 fw-bold">
          <small>Fresh && Delicious</small>
          <h3>Bakery Shop</h3>
          <p>Premium Quality && Testy Products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-dark">
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src={Slider6}
          alt="Third slide"
        />

        <Carousel.Caption className="text-color fs-1 fw-bold">
          <small>Fresh && Delicious</small>
          <h3>Cake and Pastry</h3>
          <p>Premium Quality && Testy Products</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderMain;
