import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <section>
            <div className="container mx-auto py-24">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='flex-1'>
                            <img src={banner} alt='banner' />
                        </div>
                        <div className='flex-1 text-center sm:text-center md:text-center lg:text-left'>
                            <h1 className="text-5xl font-bold capitalize">Find the right parts faster</h1>
                            <p className="py-6">CarParts is a technology-driven eCommerce company improving the way drivers shop for the parts they need. After being in business for over 25 years, we focused and streamlined our efforts to build a seamless factory-to-consumer online shopping experience.</p>
                            <a href='#parts' className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;