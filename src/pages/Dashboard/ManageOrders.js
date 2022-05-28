import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageOrders = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:8000/orders`
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
                return res.json()
            })
            .then(data => setOrders(data))
    }, [orders])

    // make order shipped
    const makeShipped = (id) => {
        const url = `http://localhost:8000/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // Delete Parts
    const deleteParts = (id) => {

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

                const url = `http://localhost:8000/order/${id}`
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const restOrders = orders.filter(order => order._id !== id)
                        setOrders(restOrders)
                    })
            }
        })



    }

    return (
        <div className="overflow-x-auto p-4 shadow-lg rounded-lg m-8 bg-slate-50">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Parts Name</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.partsName}</td>
                                <td>${order.totalPrice}</td>
                                {
                                    order.paid ?
                                        <td>Paid {
                                            !order.status ?
                                                <button onClick={() => makeShipped(order._id)} className='btn btn-xs ml-3 text-white'>Start Shipping</button> :
                                                ''
                                        }  </td> :
                                        <td>unpaid</td>
                                }
                                {
                                    order.status ?
                                        <td className=' text-green-500'>Shipped</td> :
                                        order.paid ?
                                            <td>Pandding</td> :
                                            <td>{''} </td>
                                }
                                {
                                    !order.paid &&
                                    <td><button onClick={() => deleteParts(order._id)} className='btn btn-xs bg-red-600 text-white'>Cancle</button></td>
                                }
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;