import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Resources/images/logo1.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div>
                    <img style={{height:"50px"}} src={logo} alt=""></img>
                </div>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link me-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5 text-muted" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5 text-muted" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5 text-muted" to="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;