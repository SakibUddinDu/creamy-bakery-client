import React from 'react';
import { Button } from 'react-bootstrap';
import cake from '../../../Resources/images/cake1.png';


const OrderList = ({order}) => {
 
    return (
      <div className="col-md-4">
        <div className="d-flex justify-content-between">
     
          <img style={{width:"50px", height:"50px"}} src={cake} alt=""></img>
          <Button>{order.state}</Button>
        
        </div>
        <h5>{order.product}</h5>
        <small className="fw-light">{order.email}</small>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, neque amet earum ipsa dolorem dolorum nobis quibusdam. Dolore, asperiores!</p>
      </div>
       
            
      // </div>
    );
};

export default OrderList;