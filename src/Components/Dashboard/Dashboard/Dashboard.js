import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import PaymentProcess from "../../PaymentProcess/PaymentProcess";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser);

  const { _id } = useParams();

  const [product, setProduct] = useState({});
  // console.log(product);

  useEffect(() => {
    fetch("http://localhost:5000/product/" + _id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [_id]);

  //   fetch("http://localhost:5000/addOrder", {
  //     method: "POST",
  //     //  headers:{'content-type'  :  'application/json'},
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((success) => {
  //       if (success) {
  //         //   closeModal();
  //         alert("Appointment Received");
  //       }
  //     });
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // data.service =appointmentOn;
    // data.date=date;
    // data.created = new Date();

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Appointment Received");
        }
      });
  };

  return (
    <section>
      <div style={{ background: "#F4FDFB" }} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-6">
          <h5>Order</h5>
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
                name="email"
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
                className="form-control"
              />

              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <br />

            <h6>Pay with CREDIT CARD</h6>
            <PaymentProcess></PaymentProcess>
            <br />
            <div className="d-flex justify-content-between">
              <div>
                <p> Your Charge will be {product.price}</p>
              </div>
              <div className="form-group ">
                <button type="submit" className="btn btn-secondary  text-white">
                  Pay
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
