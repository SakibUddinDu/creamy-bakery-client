import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])
    console.log((orders));
    useEffect(()=> {
        fetch("http://localhost:5000/orders?email="+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    }, [])

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 row">
            {
                orders.map( order => <OrderList order={order} ></OrderList>)
            } 
            </div>    
        
            
        </div>
    );
};

export default Orders;