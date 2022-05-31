import React from 'react';
import Swal from 'sweetalert2';

const UserRow = ({ user, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        const url = `https://fast-depths-70621.herokuapp.com/user/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Make Admin Done'
                })
            })
    }

    // Remove user
    const removeUser = () => {

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' ?
                    <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> :
                    ''
            }</td>
        </tr>
    );
};

export default UserRow;