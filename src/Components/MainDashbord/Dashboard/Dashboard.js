import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import {
  faPlus,
  faShoppingBag,
  faShoppingCart,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Resources/images/logo1.png";
// import AddService from '../AddService/AddService';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import Order from '../Order/Order';
// import Review from '../Review/Review';
// import ServiceListAdmin from '../ServiceListAdmin/ServiceListAdmin';
// import ServiceListAdminSmall from '../ServiceListAdminSmall/ServiceListAdminSmall';
// import ServiceListCustomer from '../ServiceListCustomer/ServiceListCustomer';
import "./Dashboard.css";


const Dashboard = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser);

  const { _id } = useParams();

  const [product, setProduct] = useState({});
  // console.log(product);

  useEffect(() => {
    fetch('http://localhost:5000/product/' +_id)    //product er pore / dei ni,           + app.js id ar eidike  _id
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [_id]);
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // data.service =appointmentOn;
    // data.date=date;
    data.created = new Date();

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      //  headers:{'content-type'  :  'application/json'},
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          //   closeModal();
          alert("Appointment Received");
        }
      });
  };
  return (
    <Tab.Container
      defaultActiveKey={`${
        loggedInUser.isAdmin
          ? "service-list-admin"
          : loggedInUser.service
          ? "order"
          : "service-list-customer"
      }`}
    >
      <Row className="m-0">
        <Col xs={1} lg={2}>
          <div className="nav-container">
            <Link to="/home">
              <img src={logo} alt="logo" className="my-3 my-lg-3 img-fluid" />
            </Link>
            <Nav className="flex-column">
              {loggedInUser.isAdmin ? (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="service-list-admin">
                      <FontAwesomeIcon
                        icon={faShoppingBag}
                        title="Service List"
                      />{" "}
                      <span className="d-none d-lg-inline-block">
                        Order List
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="add-service">
                      <FontAwesomeIcon icon={faPlus} title="Add Service" />{" "}
                      <span className="d-none d-lg-inline-block">
                        Add Service
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="make-admin">
                      <FontAwesomeIcon icon={faUserPlus} title="Make Admin" />{" "}
                      <span className="d-none d-lg-inline-block">
                        Make Admin
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="order">
                      <FontAwesomeIcon icon={faShoppingCart} title="Order" />{" "}
                      <span className="d-none d-lg-inline-block">Order</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="service-list-customer">
                      <FontAwesomeIcon
                        icon={faShoppingBag}
                        title="Service List"
                      />{" "}
                      <span className="d-none d-lg-inline-block">
                        Order List
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="review">
                      <FontAwesomeIcon icon={faCommentDots} title="Review" />{" "}
                      <span className="d-none d-lg-inline-block">Review</span>
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </div>
        </Col>

        <Col className="tab-big px-0 " xs={11} lg={10}>
          <h5>Order</h5>
          {/* <h2>{_id}</h2> */}

          <form
            className="ms-5 mt-5 "
            style={{ width: "500px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                defaultValue={loggedInUser.name}
                placeholder="Enter Your Name"
                className="form-control"
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <br />

         
            <div className="form-group">
              <input
                type="text"
                {...register("email", { required: true })}
                defaultValue={loggedInUser.email}
                placeholder="Email"
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <br />

            <div className="form-group">
              <input
                type="text"
                {...register("product", { required: true })}
                name="product"
                defaultValue={product.name}
                // placeholder="Phone Number"
                className="form-control"
              />
             

              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <br />

            <h6>Pay with CREDIT CARD</h6>
            {/* <PaymentProcess></PaymentProcess> */}
            {/* <PaymentProcess></PaymentProcess> */}

            {/* <div className="form-group">
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Email"
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <br />
            <div className="form-group row">
              <div className="col-6">
                <select
                  className="form-control"
                  {...register("gender", { required: true })}
                >
                  <option disabled={true} value="Not set">
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not set">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <br />
              <div className="col-6">
                <input
                  {...register("age", { required: true })}
                  className="form-control"
                  placeholder="Your Age"
                  type="number"
                />
                {errors.age && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <br />
              <br />
       
            </div> */}
            <br />
            <div className="d-flex justify-content-between">
              <div>
                <p>Your Charge will be  {product.price}</p>
              </div>
              <div className="form-group ">
                <button type="submit" className="btn btn-secondary  text-white">
                  Pay
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Dashboard;





// import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
// import {
//   faPlus,
//   faShoppingBag,
//   faShoppingCart,
//   faUserPlus
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useContext } from "react";
// import { Col, Nav, Row, Tab } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../../App";
// import logo from "../../../Resources/images/logo1.png";
// import PaymentProcess from "../../PaymentProcess/PaymentProcess";
// // import AddService from '../AddService/AddService';
// // import MakeAdmin from '../MakeAdmin/MakeAdmin';
// // import Order from '../Order/Order';
// // import Review from '../Review/Review';
// // import ServiceListAdmin from '../ServiceListAdmin/ServiceListAdmin';
// // import ServiceListAdminSmall from '../ServiceListAdminSmall/ServiceListAdminSmall';
// // import ServiceListCustomer from '../ServiceListCustomer/ServiceListCustomer';
// import "./Dashboard.css";


// const Dashboard = () => {
//   const [user, setUser] = useContext(UserContext);
//   // document.title = "Dashboard||Creative Agency";

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // data.service =appointmentOn;
//     // data.date=date;
//     data.created = new Date();

//     fetch("http://localhost:5000/addAppointment", {
//       method: "POST",
//       //  headers:{'content-type'  :  'application/json'},
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((success) => {
//         if (success) {
//           //   closeModal();
//           alert("Appointment Received");
//         }
//       });
//   };
//   return (
//     <Tab.Container
//       defaultActiveKey={`${
//         user.isAdmin
//           ? "service-list-admin"
//           : user.service
//           ? "order"
//           : "service-list-customer"
//       }`}
//     >
//       <Row className="m-0">
//         <Col xs={1} lg={2}>
//           <div className="nav-container">
//             <Link to="/home">
//               <img src={logo} alt="logo" className="my-3 my-lg-3 img-fluid" />
//             </Link>
//             <Nav className="flex-column">
//               {user.isAdmin ? (
//                 <>
//                   <Nav.Item>
//                     <Nav.Link eventKey="service-list-admin">
//                       <FontAwesomeIcon
//                         icon={faShoppingBag}
//                         title="Service List"
//                       />{" "}
//                       <span className="d-none d-lg-inline-block">
//                         Order List
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="add-service">
//                       <FontAwesomeIcon icon={faPlus} title="Add Service" />{" "}
//                       <span className="d-none d-lg-inline-block">
//                         Add Service
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="make-admin">
//                       <FontAwesomeIcon icon={faUserPlus} title="Make Admin" />{" "}
//                       <span className="d-none d-lg-inline-block">
//                         Make Admin
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Item>
//                     <Nav.Link eventKey="order">
//                       <FontAwesomeIcon icon={faShoppingCart} title="Order" />{" "}
//                       <span className="d-none d-lg-inline-block">Order</span>
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="service-list-customer">
//                       <FontAwesomeIcon
//                         icon={faShoppingBag}
//                         title="Service List"
//                       />{" "}
//                       <span className="d-none d-lg-inline-block">
//                         Order List
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="review">
//                       <FontAwesomeIcon icon={faCommentDots} title="Review" />{" "}
//                       <span className="d-none d-lg-inline-block">Review</span>
//                     </Nav.Link>
//                   </Nav.Item>
//                 </>
//               )}
//             </Nav>
//           </div>
//         </Col>

//         <Col className="tab-big px-0 " xs={11} lg={10}>
//           <h5>Order</h5>

//           <form
//             className="ms-5 mt-5 "
//             style={{ width: "500px" }}
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div className="form-group">
//               <input
//                 type="text"
//                 {...register("name", { required: true })}
//                 name="name"
//                 placeholder="Enter Your Name"
//                 className="form-control"
//               />
//               {errors.name && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <br />

//             <div className="form-group">
//               <input
//                 type="text"
//                 {...register("phone", { required: true })}
//                 name="phone"
//                 placeholder="Phone Number"
//                 className="form-control"
//               />
//               {errors.phone && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <br />
//             <div className="form-group">
//               <input
//                 type="text"
//                 {...register("email", { required: true })}
//                 placeholder="Email"
//                 className="form-control"
//               />
//               {errors.email && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <br />

//             <h6>Pay with CREDIT CARD</h6>
//             <PaymentProcess></PaymentProcess>
//             {/* <PaymentProcess></PaymentProcess> */}

//             {/* <div className="form-group">
//               <input
//                 type="text"
//                 {...register("email", { required: true })}
//                 placeholder="Email"
//                 className="form-control"
//               />
//               {errors.email && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <br />
//             <div className="form-group row">
//               <div className="col-6">
//                 <select
//                   className="form-control"
//                   {...register("gender", { required: true })}
//                 >
//                   <option disabled={true} value="Not set">
//                     Select Gender
//                   </option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Not set">Other</option>
//                 </select>
//                 {errors.gender && (
//                   <span className="text-danger">This field is required</span>
//                 )}
//               </div>
//               <br />
//               <div className="col-6">
//                 <input
//                   {...register("age", { required: true })}
//                   className="form-control"
//                   placeholder="Your Age"
//                   type="number"
//                 />
//                 {errors.age && (
//                   <span className="text-danger">This field is required</span>
//                 )}
//               </div>
//               <br />
//               <br />
       
//             </div> */}
//             <br />
//             <div className="d-flex justify-content-between">
//               <div>
//                 <p>Your Charge will be .....................</p>
//               </div>
//               <div className="form-group ">
//                 <button type="submit" className="btn btn-secondary  text-white">
//                   Pay
//                 </button>
//               </div>
//             </div>
//           </form>
//         </Col>
//       </Row>
//     </Tab.Container>
//   );
// };

// export default Dashboard;
