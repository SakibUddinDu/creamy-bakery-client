import React from 'react';

const ServiceCard = ({service}) => {
    // console.log(props);
    const {name , title ,img} = service;
    return (
        <div className="card shadow-sm col-md-3 ps-3">
           
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <small className="m-0">{title}</small>
                </div>
            </div>
            {/* <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div> */}
       </div>
    );
};

export default ServiceCard;