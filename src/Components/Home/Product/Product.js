import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
// import { Col, Row } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="col-md-3 ms-3 container mt-5"
    >
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <h2>${product.price}</h2>
        </Card.Text>
      </Card.Body>
      <Link to={`/checkout/${ product._id}`}>
          <Button  variant="secondary">Buy Now</Button>
          </Link>
    </Card>
  );
};

export default Product;
