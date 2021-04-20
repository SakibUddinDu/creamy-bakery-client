import { faFileAlt, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingBag,
  faShoppingCart,
  faSignOutAlt,
  faTasks,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState([]);
  console.log(admin);

  useEffect(() => {
    fetch("http://localhost:5000/admin?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
    { admin.length ? 
      <div>
        <ul className="list-unstyled">
          <li>
            <Link to="/allOrders" className="text-white">
              <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
            </Link>
          </li>
          <li>
            <Link to="/addProduct" className="text-white">
              <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Product</span>
            </Link>
          </li>
          <li>
            <Link to="/makeAdmin" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
            </Link>
          </li>
          <li>
            <Link to="/manageProduct" className="text-white">
              <FontAwesomeIcon icon={faTasks} /> <span>Manage Product</span>
            </Link>
          </li>
       
        </ul>
      </div>
   

      :<div>
           <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
            </Link>
          </li>
          <li>
            <Link to="/orderList" className="text-white">
              <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
            </Link>
          </li>
          <li>
            <Link to="/addReview" className="text-white">
              {/* <FontAwesomeIcon icon={faPlusSquare} /> <span>Review</span> */}
              <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
            </Link>
          </li>
        </ul>



       
      </div>
    }
      <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
    </div>
  );
};

export default Sidebar;
