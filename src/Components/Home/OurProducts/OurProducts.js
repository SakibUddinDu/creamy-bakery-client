import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const OurProducts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  return (
    <div className="service-area my-5 py-5">
      <div className="container">
        <div>
          <h5 className=" text-uppercase text-center">Our Products</h5>
        </div>
        <div className="row mt-3">
          {products.map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
