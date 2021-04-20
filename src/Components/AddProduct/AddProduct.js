import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import "./AddProduct.css";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    const productData = {
      name: data.name,
      img: imgURL,
      price: data.price,
    };
    const url = `http://localhost:5000/addProduct`;
    console.log(productData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImgUpload = (event) => {
    const imgData = new FormData();
    imgData.set("key", "9509439a500d1f702558a44224fca7c5");
    imgData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="row ">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-6">
          <div className="from_area">
            <form className="pt-5 pl-5" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                name="name"
                defaultValue="My awesome Product"
                {...register("name", { required: true })}
              />
              <br />
              <br />

              <input
                className="form-control"
                name="price"
                defaultValue="100"
                {...register("price", { required: true })}
              />
              <br />
              <br />

              <label for="icon-upload" className="file-upload">
                <p>
                  <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Imag
                </p>
              </label>
              <br />
              <input type="file" onChange={handleImgUpload} />
              <br />
              <br />
              <input
                className="btn btn-dark px-5"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
