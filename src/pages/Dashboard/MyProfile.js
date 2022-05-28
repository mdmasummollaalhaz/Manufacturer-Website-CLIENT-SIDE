import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';


const MyProfile = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const { displayName, email, phoneNumber, photoURL, } = user
    const [userProfile, setUserProfile] = useState([])


    useEffect(() => {
        const uUrl = `http://localhost:8000/user?email=${email}`
        fetch(uUrl, {
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
            .then(data => data.map(u => setUserProfile(u)))
    }, [userProfile])

    const handleSubmitForm = (event) => {




        event.preventDefault()
        const education = event.target.education.value
        const location = event.target.location.value
        const phone = event.target.phone.value
        const linkedin = event.target.linkedin.value

        const updateUser = {
            education: education,
            location: location,
            phone: phone,
            linkedin: linkedin
        }
        setUserProfile(updateUser)

        // post user to server
        const url = `http://localhost:8000/users?email=${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Upgrade Done',
                    text: 'Please close the popup and check your profile',
                })
            })
    }




    // console.log(watch())
    return (
        <section>
            <div className="container mx-auto p-4">
                <div className='shadow-lg p-8 bg-white rounded-lg'>
                    <div className='flex flex-row justify-between'>
                        <h2 className=' text-3xl'>My profile</h2>
                        <label htmlFor="profile-update-modal" className='btn btn-xs btn-primary modal-button' >Update Profile</label>
                    </div>
                    <div className="divider"></div>
                    <div className="profile-info flex flex-row justify-between items-start">
                        <div className="image avatar">
                            <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                                <img src={photoURL} alt={displayName} />
                            </div>

                        </div>
                        <div className="info">
                            <div>
                                <p className=' text-sm text-stone-500'>Full name</p>
                                <p>{displayName}</p>
                            </div>

                            <div className='mt-5'>
                                <p className=' text-sm text-stone-500'>Email Address</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className='mb-3'><b>Education: </b>{userProfile.education}</p>
                        <p className='mb-3'><b>location: </b>{userProfile.location}</p>
                        <p className='mb-3'><b>Phone Number: </b>{userProfile.phone}</p>
                        <p className='mb-3'><b>LinkedIn profile: </b><a className=' underline text-blue-600' href={userProfile.linkedin} target='_blank'>{userProfile.linkedin}</a></p>
                    </div>
                    <div>

                    </div>
                </div>


                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="profile-update-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="profile-update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Update your profile!</h3>

                        <form onSubmit={handleSubmitForm} className='mt-5 grid grid-flow-row gap-5'>
                            <div>
                                <span className=' label-text'>Education</span>
                                <input type="text" autoFocus className='input input-bordered w-full' name='education' defaultValue={userProfile.education} />
                            </div>

                            <div>
                                <span className=' label-text'>Location</span>
                                <input type="text" autoFocus className='input input-bordered w-full' name='location' defaultValue={userProfile.location} />
                            </div>

                            <div>
                                <span className=' label-text'>Phone Number</span>
                                <input type="text" autoFocus className='input input-bordered w-full' name='phone' defaultValue={userProfile.phone} />
                            </div>

                            <div>
                                <span className=' label-text'>Linkdine Profile Link</span>
                                <input type="text" className='input input-bordered w-full' name='linkedin' defaultValue={userProfile.linkedin} />
                            </div>


                            <input type="submit" defaultValue='add' className='btn' />
                        </form>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default MyProfile;