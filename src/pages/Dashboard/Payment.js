import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../share/Loading/Loading';
import CheckoutForm from './CheckoutForm';

// Stript key
const stripePromise = loadStripe('pk_test_51L4H65Ivx12FIDxg0X9vOghGiPlHkHQNWvJQUCMMlGq6W69r8pJ0MXyTrEHsbWhFYCuqiDBnaAzVclQ2OswOJAah00WGDb6GlS');


const Payment = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const url = `https://fast-depths-70621.herokuapp.com/my-orders/${id}`
    const { data, myOrder, isLoading, user } = useQuery('order', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            navigate('/login')
        }
        return res.json()
    }))

    if (isLoading) {
        return <Loading />
    }
    const { partsName, price, quantity, address, userName, totalPrice, image } = data
    return (
        <div className="card bg-base-100 shadow-xl m-8">
            <div className="card-body">
                <p className='mb-3 text-primary'>Hello {userName}</p>
                <img src={image} alt={partsName} className='w-24 rounded' />
                <h2 className="card-title">{partsName}</h2>
                <p>Shipping Address: {address}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                <p>Total: ${totalPrice}</p>

                <div className='mt-8'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;