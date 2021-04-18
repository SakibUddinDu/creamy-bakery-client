import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="mt-5">
            <Row className="m-0 pl-md-5">
                <Col className="px-lg-5" xs={12} md={6}>
                    <h2 className="text-white font-weight-bold">Let Us Make Any <br />Order</h2>
                    <p className="text-white">With well furnished, we make amazing foods for all Events Or Ceremony</p>
                </Col>
                <Col xs={12} md={6}>
                    <Form>
                        <Form.Control type="email" placeholder="Your Email Address" />
                        <Form.Control type="text" placeholder="Your Name/Company's Name" />
                        <Form.Control as="textarea" rows={10} placeholder="Your Message" />
                        <button className="brand-btn mt-3" type="submit">Send</button>
                    </Form>
                </Col>
                <Col className="mt-5" xs={12}>
                    <p className="text-muted text-center"><small>Copyright Creamy 2021</small></p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;