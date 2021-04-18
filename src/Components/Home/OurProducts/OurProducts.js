import React, { useEffect, useState } from 'react';
import ProductData from '../../../Resources/FakeData/ProductData';
import Product from '../Product/Product';

const OurProducts = () => {

    // const [services, setServices] = React.useState([]);
    const [products, setProduct] = useState([])

    // useEffect(() => {
    //     fetch('https://pacific-depths-60044.herokuapp.com/services')
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, []);
    useEffect(() => {
      setProduct(ProductData)
    }, []);


    return (
        <div className="service-area d-flex align-items-center">
                        <div>
                        <h5 className=" text-uppercase text-center">Our Products</h5>
                            <div className="row ms-5 mt-3">
                                 {
                                        products.map(pd => <Product key={pd.id} product={pd} />)
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