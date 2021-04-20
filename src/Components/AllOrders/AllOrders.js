import React, { useEffect, useState } from 'react';
import logo from '../../Resources/images/logo1.png';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllOrders = () => {
    const [show, setShow] =useState(false);
    const [state, setState] = useState(null);

    const [orders, setOrders] = useState([])
    console.log(orders);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleChange = (e) => {
         setState(e.target.value)
        fetch(`http://localhost:5000/order-state/${orders._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: e.target.value })
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

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
                                <th scope="col">#</th>

                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Pay With</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            {orders.length === 0 ?
                            <h1 className = "text-center m-5">Loading...</h1>
                                : 

                                <tbody>
                                {orders.map(Lists =>

                                    <tr key={Lists._id}>
                                        <th scope="row">{Lists.itemId}</th>
                                        <td>{Lists.name}</td>
                                        <td>{Lists.email}</td>
                                        <td>{Lists.product}</td>
                                        <td><p>Credit Card</p></td>
                                        <td>
                                            <select  onChange={handleChange}>
                                                <option className="text-danger"> pending</option>
                                                <option className="text-primary" > Done</option>
                                                <option className="text-secondary"> Ongoing</option>
                                            </select>
                                            
   
                                        </td>
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

export default AllOrders;