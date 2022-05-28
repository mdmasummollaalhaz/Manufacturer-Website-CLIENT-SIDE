import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate()
    const [myOrders, setMyOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            const url = `http://localhost:8000/my-orders?email=${user.email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/login')
                    }
                    console.log(res)
                    return res.json()
                })
                .then(data => setMyOrders(data))
        }
    }, [user])
    // Handle Cancle My order
    const handleCancleOrder = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancle the Order'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Order Cancled!',
                    'Your Order has been Cancled.',
                    'success'
                )

                const url = `http://localhost:8000/my-orders/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const restOrders = myOrders.filter(order => order._id !== id)
                        setMyOrders(restOrders)
                    })
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Parts Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.partsName}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price}</td>
                            <td>${order.totalPrice}</td>
                            {
                                order.transactionId ?
                                    <td className=' text-green-400'>Paid</td> :
                                    <td>Not Paid <Link to={`/dashboard/payment/${order._id}`} className='btn btn-xs btn-primary ml-3'>Pay Now</Link></td>
                            }

                            {
                                order.status ? <td>Delivered</td> : <td></td>
                            }

                            {
                                order.transactionId ?
                                    '' :
                                    <td><button onClick={() => handleCancleOrder(order._id)} className='btn btn-xs bg-red-700 text-white'>Cancle</button></td>
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;