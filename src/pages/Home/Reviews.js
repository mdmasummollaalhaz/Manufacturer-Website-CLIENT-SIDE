import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../share/Loading/Loading'
import ReactStars from 'react-rating-stars-component';



const Reviews = () => {
    const { isLoading, error, data } = useQuery('Reviews', () =>
        fetch('http://localhost:8000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <div className="container mx-auto py-24 px-4">
                <h2 className=' text-4xl font-semi-bold text-primary mb-16 text-center'>Happy Customer Reviews</h2>
                <div className="testimonial grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {
                        data.map(review =>
                            <div key={review._id} className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    {
                                        review.image ?
                                            <img src={review.image} alt="Shoes" className="rounded-xl" /> :
                                            <img src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png' alt="Shoes" className="rounded-xl w-6/12" />
                                    }
                                </figure>
                                <div className="card-body items-center text-center">
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={review.ratting}
                                        edit={false}
                                    />
                                    <h2 className="card-title">{review.name}</h2>
                                    <p>{review.reviewText}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;