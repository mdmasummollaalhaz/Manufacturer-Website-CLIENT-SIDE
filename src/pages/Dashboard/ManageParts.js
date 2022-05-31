import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageParts = () => {
    const navigate = useNavigate()
    const [parts, setParts] = useState([])
    useEffect(() => {
        const url = `https://fast-depths-70621.herokuapp.com/parts`
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
            .then(data => setParts(data))
    }, [parts])

    // Delete parts
    const deleteParts = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete the parts'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Parts Deleted',
                    'Your Parts has been Deleted.',
                    'success'
                )

                const url = `https://fast-depths-70621.herokuapp.com/parts/${id}`
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        const restParts = parts.filter(item => item._id !== id)
                        setParts(restParts)
                    })
            }
        })
    }
    return (
        <div className="overflow-x-auto p-8 shadow-lg rounded-lg m-8 bg-slate-50">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts.map((item, index) =>
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th><img src={item.image} alt={item.name} className='w-10 rounded' /></th>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td><button onClick={() => deleteParts(item._id)} className='btn btn-xs bg-red-600 text-white'>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageParts;