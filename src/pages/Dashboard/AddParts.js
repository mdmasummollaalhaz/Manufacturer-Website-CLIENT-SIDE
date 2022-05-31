import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddParts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const newParts = {
            name: data.name,
            image: data.image,
            price: data.price,
            avail_qty: data.avail_qty,
            min_order: data.min_order,
            short_des: data.short_des
        }

        // Post new parts to server
        const url = `https://fast-depths-70621.herokuapp.com/parts`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newParts)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'New Parts Added'
                })
                reset()
            })
    };
    return (
        <div className=' p-4 shadow-lg rounded-lg m-8 bg-white'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-16">
                <span className='label-text mb-2'>Parts Name</span>
                <input className='input input-bordered w-full   mb-6' {...register("name")} />

                <span className='label-text mb-2'>Parts image link</span>
                <input className='input input-bordered w-full mb-6' {...register("image")} />

                <span className='label-text mb-2'>Parts price</span>
                <input className='input input-bordered w-full   mb-6' type="number" {...register("price")} />

                <span className='label-text mb-2'>Parts stock quantity</span>
                <input className='input input-bordered w-full   mb-6' type="number" {...register("avail_qty")} />

                <span className='label-text mb-2'>Parts sell min-order</span>
                <input className='input input-bordered w-full   mb-6' type="number" {...register("min_order")} />

                <span className='label-text mb-2'>Parts description</span>
                <textarea className='textarea textarea-bordered w-full   mb-6' type="number" {...register("short_des")} />

                <input className='btn btn-primary' type="submit" value='Add Parts' />

            </form>
        </div>
    );
};

export default AddParts;