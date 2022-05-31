import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const AddReview = () => {
    const [ratting, setRatting] = useState(0)
    const [user] = useAuthState(auth);

    const handleSubmitReview = (event) => {
        event.preventDefault()
        const reviewText = event.target.review.value
        const name = user?.displayName
        const email = user?.email
        // console.log(ratting, reviewText)

        const newReview = { ratting, reviewText, name, email }

        // Post reviews to server
        const url = 'https://fast-depths-70621.herokuapp.com/reviews'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(result => {
                event.target.review.value = ''
                Swal.fire({
                    icon: 'success',
                    title: 'Thanks For your Review'
                })
            })

    }

    const ratingChanged = (newRating) => {
        setRatting(newRating)
    };
    return (
        <div className=' lg:w-6/12 shadow-lg p-8 rounded m-8'>
            <form onSubmit={handleSubmitReview} className=' grid grid-cols-1 gap-6'>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                <input type="text" value={user?.displayName} disabled />
                <input type="email" value={user?.email} disabled />
                <textarea className="textarea textarea-bordered" placeholder="Comment" name='review'></textarea>
                <input type="submit" value='add' className="btn btn-primary" />
            </form>

        </div>
    );
};

export default AddReview;