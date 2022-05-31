import React, { useEffect, useState } from 'react';
import PartsItem from './PartsItem';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        const url = 'https://fast-depths-70621.herokuapp.com/parts'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <section id='parts'>
            <div className="container mx-auto py-24 text-center p-4">
                <h2 className=' text-4xl font-semi-bold text-primary mb-16'>Best Selling Parts</h2>
                <div className="parts grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        parts.map(item => <PartsItem item={item} key={item._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Parts;