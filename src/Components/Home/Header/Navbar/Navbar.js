import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../Resources/images/logo1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <img style={{ height: "50px" }} src={logo} alt=""></img>
        </div>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link me-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link me-5" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link me-5 text-muted" to="/dashboard">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link me-5 text-muted" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link me-5 text-muted" to="/Contact us">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">
              <Button variant="outline-dark">LogIn</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useContext } from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import { Link, useHistory } from 'react-router-dom';
// import { UserContext } from '../../../../App';
// // import logo from '../../../assets/logo.png';
// import logo from '../../../../Resources/images/logo1.png';
// // import { UserContext } from '../../App';
// import './Navbar.css';

// const NavigationBar = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     return (
//         <Navbar className="mx-md-5 px-md-5 navigation-bar" expand="lg" variant="light">
//             <Navbar.Brand><Link to="/home"><img height="47px" src={logo} alt="logo" /></Link></Navbar.Brand>
//             <Navbar.Toggle aria-controls="my-nav" />
//             <Navbar.Collapse id="my-nav">
//                 <Nav className=" ml-lg-auto">
//                     <Link className="nav-link text-white " to="/home">Home</Link>
//                     <Link className="nav-link text-white" to="/portfolio">Our Portfolio</Link>
//                     <Link className="nav-link text-white" to="/team">Our Team</Link>
//                     <Link className="nav-link text-white" to="/contact">Contact Us</Link>
//                     {
//                         loggedInUser.uid ?
//                             <button className="brand-btn" onClick={() => history.push('/dashboard')}>Dashboard</button>
//                             : <button onClick={() => history.push('/login')} class="brand-btn">Login</button>
//                     }
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavigationBar;
