import React from 'react';

const SummaryCard = ({ icon, numbers, text }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <span className='text-5xl text-primary'>{icon}</span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{numbers}</h2>
                    <p className='text-primary'>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;