import React, { useEffect, useState } from 'react';
// import ProductData from '../../../Resources/FakeData/ProductData';
import Product from '../Product/Product';

const OurProducts = () => {
    const [products, setProduct] = useState([])
// const handleAddProduct= () =>{
//     fetch("http://localhost:5000/addItems", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(products),
//       })
// }
  

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    // useEffect(() => {
    //   setProduct(ProductData)
    // }, []);


    return (
        <div className="service-area d-flex align-items-center">
                        <div>
                        <h5 className=" text-uppercase text-center">Our Products</h5>
                        {/* <Button  className="btn" onClick={handleAddProduct}>Add Product</Button> */}
                            <div className="row ms-5 mt-3">
                                
                                 {
                                        products.map(pd => <Product key={pd._id} product={pd} />)
                                    }
                              
                            </div>
                        </div>
                        {/* <div style={{ minHeight: '50vh' }} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Spinner style={{ width: '70px', height: '70px' }} animation="border" variant="success" />
                        </div>
                    </div> */}
                    </div> 
                    
    );
};

export default OurProducts;