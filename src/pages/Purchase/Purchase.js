import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import MyOrders from '../Dashboard/MyOrders';

const Purchase = () => {
    const navigate = useNavigate()
    const [qty, setQty] = useState([])
    const [total, setTotal] = useState(0)
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const { register, handleSubmit, reset, watch } = useForm();

    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `http://localhost:8000/parts/${id}`
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
            .then(data => setItem(data))
    }, [])

    const { _id, name, short_des, image, avail_qty, min_order, price } = item
    const totalPrice = price * watch().quantity


    const onSubmit = data => {
        const newOrder = {
            userName: user?.displayName,
            email: user?.email,
            phone: data.phone,
            address: data.address,
            quantity: data.quantity,
            price: price,
            partsName: name,
            totalPrice: totalPrice,
            image: image
        }
        fetch('http://localhost:8000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data));


        Swal.fire({
            icon: 'success',
            title: 'Thanks for your order!',
        })

        reset()



    }
    return (
        <main className=' bg-slate-50'>
            <div className="container mx-auto py-24">
                <div className="purchase-item px-4 lg:flex lg:flex-row">
                    <div className="item lg:flex-1 lg:mr-8">
                        <div className="card card-side bg-base-100 shadow-xl flex flex-col">
                            <figure>
                                <img src={image} alt={name} className=' w-36' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{short_des}</p>
                                <p>Price: ${price}</p>
                                <p>Avaiable Qty: {avail_qty}</p>
                                <p>Minimum order: {min_order}</p>
                            </div>
                        </div>
                    </div>
                    <div className="buy-form mt-16 md:flex-1 lg:mt-0">
                        <form className=' flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Name</label>
                            <input className='input input-bordered w-full mb-5' {...register("name")} value={user?.displayName} disabled />

                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" className='input input-bordered w-full mb-5' {...register("email")} value={user?.email} disabled />

                            <label htmlFor="phone">Phone Number</label>
                            <input className='input input-bordered w-full mb-5' {...register("phone")} />

                            <label htmlFor="address">Address</label>
                            <input className='input input-bordered w-full mb-5' {...register("address")} />

                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className='input input-bordered w-full mb-5' {...register("quantity")} required placeholder={`minimum quantity: ${min_order} `} />



                            {
                                parseInt(avail_qty) < parseInt(watch().quantity) ?
                                    <span className='text-orange-700'>You can't order higher than the available quantity: {avail_qty} </span> :
                                    parseInt(min_order) > parseInt(watch().quantity) ?
                                        <span className='text-orange-700'>You won't be able to reduce the quantity below the minimum order quantity {min_order} </span> :
                                        ''
                            }

                            <span className='my-5'>Total: ${
                                watch().quantity?.length === 0 ?
                                    '0'
                                    :
                                    parseInt(price) * parseInt(watch().quantity)
                            }</span>

                            {
                                parseInt(avail_qty) < parseInt(watch().quantity) || parseInt(min_order) > parseInt(watch().quantity) ?
                                    <input type="submit" value='Order' className='btn btn-primary' disabled /> :

                                    <input type="submit" value='Order' className='btn btn-primary' />
                            }

                        </form>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Purchase;