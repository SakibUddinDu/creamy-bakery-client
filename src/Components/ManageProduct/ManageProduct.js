import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
    faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import logo from '../../Resources/images/logo1.png';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="col-md-2 col-sm-6 col-12">
                <img style={{ height: '50px', textAlign: 'center', marginLeft: '5%'}} src={logo} alt=""/>
                     <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pr-5">
                    <div style={{ backgroundColor: '#E5E5E5' }}>
                    <div style={{ margin: '30px', borderRadius: '20px', backgroundColor: '#FFFFFF', fontWeight: 'bold'}}>
                        <table className="table" style={{ marginTop: '20px' }}>
                            <thead style={{width: 'auto',backgroundColor: '#F5F6FA', borderRadius: '20px' }}>
                                <tr style={{ margin: '20px' }}>
                                {/* <th scope="col">#</th> */}

                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            {products.length === 0 ?
                            <h1 className = "text-center m-5">Loading...</h1>
                                : 

                                <tbody>
                                {products.map(Lists =>

                                    <tr key={Lists._id}>
                                        {/* <th scope="row">{Lists.itemId}</th> */}
                                        <td>{Lists.name}</td>
                                        <td>{Lists.price}</td>
                                        <td>
                                            <img style={{height:"60px", width:"60px"}} src={Lists.img} alt=""></img>
                                        </td>
                                        <td><span className="me-3"><FontAwesomeIcon icon={ faPencilAlt} /></span> <FontAwesomeIcon icon={ faTrashAlt} /></td>
                          
                                    </tr>
                                )}

                            </tbody>
                            }
                            
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;