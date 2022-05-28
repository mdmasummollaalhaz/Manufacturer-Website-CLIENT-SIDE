import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserRow from './UserRow';

const AllUsers = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = `http://localhost:8000/users`
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
            .then(data => setUsers(data))
    }, [users])

    return (
        <div className='p-4 shadow-lg rounded-lg mx-8'>
            <h2 className="text-2xl">All Users:</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;