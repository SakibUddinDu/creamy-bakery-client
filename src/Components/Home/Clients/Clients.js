import React from 'react';
import { Col, Row } from 'react-bootstrap';
import clients1 from '../../../Resources/clients/clients1.png';
import clients2 from '../../../Resources/clients/clients2.png';
import clients3 from '../../../Resources/clients/clients3.png';
import clients4 from '../../../Resources/clients/clients4.png';
import clients5 from '../../../Resources/clients/clients5.png';
import clients6 from '../../../Resources/clients/clients6.png';
import './Clients.css';


const CompaniesWeServed = () => {
    return (
        <div className="company-container">
            <Row className="d-flex justify-content-center m-0">
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={clients1} alt="" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={clients2} alt="" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={clients3} alt="" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={clients4} alt="" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={clients5} alt="" /></Col>
                <Col xs={6} md={4} lg={2} className="company-img d-flex justify-content-center"><img height="50px" src={clients6} alt="" /></Col>
            </Row>
        </div>
    );
};

export default CompaniesWeServed;