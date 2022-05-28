import React from 'react';
import { Link } from 'react-router-dom';

const PartsItem = ({ item }) => {
    const { _id, name, short_des, image, avail_qty, min_order, price } = item
    return (
        <div className='parts-item'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt={name} className="rounded-xl w-7/12" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_des.slice(0, 80)}</p>
                    <p className='mt-5'>Price: ${price}</p>
                    <p>Available Quantity: {avail_qty}</p>
                    <p>Minimum Order Quantity: {min_order}</p>
                    <div className="card-actions mt-5">
                        <Link to={`/purchase/${_id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsItem;