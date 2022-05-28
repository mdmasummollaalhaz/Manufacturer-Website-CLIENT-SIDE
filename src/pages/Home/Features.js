import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';

const Features = () => {
    return (
        <section className='bg-gray-100 py-8'>
            <div className="container mx-auto">
                <div className="features grid grid-flow-row gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="feature flex flex-row items-center justify-around">
                        <div>
                            <FaShippingFast className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-16 h-16 p-4' />
                        </div>
                        <div>
                            <h4 className=' font-bold'>FREE SHIPPING</h4>
                            <p className='text-gray-500' >On all orders over $99.00</p>
                        </div>
                    </div>
                    <div className="feature flex flex-row items-center justify-around">
                        <div>
                            <FiRefreshCcw className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-16 h-16 p-4' />
                        </div>
                        <div>
                            <h4 className=' font-bold'>30 DAYS RETURN</h4>
                            <p className='text-gray-500' >You have 30 days to return</p>
                        </div>
                    </div>
                    <div className="feature flex flex-row items-center justify-around">
                        <div>
                            <AiFillSafetyCertificate className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-16 h-16 p-4' />
                        </div>
                        <div>
                            <h4 className=' font-bold'>SAFE SHOPPING</h4>
                            <p className='text-gray-500' >Payment 100% secure</p>
                        </div>
                    </div>
                    <div className="feature flex flex-row items-center justify-around">
                        <div>
                            <HiOutlineUsers className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-16 h-16 p-4' />
                        </div>
                        <div>
                            <h4 className=' font-bold'>ONLINE SUPPORT</h4>
                            <p className='text-gray-500' >Contact us 24 hours a day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;