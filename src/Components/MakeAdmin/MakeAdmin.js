import React from "react";
// import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      console.log(data);
    fetch("http://localhost:5000/makeAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Admin Added Successfully!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="make_admin row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-6">
        <div className="make_admin-header">
          <h3>Add a Admin</h3>
        </div>

        <div className="make_admin-main">
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email Address"
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
            <br />
            
            <input className="btn btn-dark px-5" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
