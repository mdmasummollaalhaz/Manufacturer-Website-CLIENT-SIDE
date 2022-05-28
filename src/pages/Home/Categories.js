import React from 'react';
import LUBRICANT from '../../assets/images/Lubricant.webp'
import BRAKES from '../../assets/images/brakes.webp'
import FILTER from '../../assets/images/filters.webp'
import WIPER from '../../assets/images/wiper.webp'
import HORN from '../../assets/images/car-horn.webp'
import BULB from '../../assets/images/BULB-and-LED.webp'
import TYRE from '../../assets/images/Tyre.webp'
import ELECTRIAL from '../../assets/images/electrcal-parts.webp'

const Categories = () => {
    return (
        <section className=' bg-slate-100'>
            <div className="container mx-auto py-24 p-4">
                <h2 className=' text-4xl font-semi-bold text-primary mb-16 text-center'>Shop By Categories</h2>
                <div className="categories grid grid-flow-row gap-4 grid-cols-2 lg:grid-cols-4">
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center items-center">
                        <img src={LUBRICANT} alt="LUBRICANT" className=' w-32 text-center' />
                        <h4>LUBRICANT</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={BRAKES} alt="BRAKES" className=' w-32 text-center' />
                        <h4>BRAKES</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={FILTER} alt="FILTER" className=' w-32 text-center' />
                        <h4>FILTER</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={WIPER} alt="WIPER-BLADE" className=' w-32 text-center' />
                        <h4>WIPER-BLADE</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={HORN} alt="HORN" className=' w-32 text-center' />
                        <h4>HORN</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={BULB} alt="BULB" className=' w-32 text-center' />
                        <h4>BULB-LED</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={TYRE} alt="TYRE" className=' w-32 text-center' />
                        <h4>TYRE</h4>
                    </div>
                    <div className="item bg-white shadow-md text-center py-5 rounded-md flex flex-col items-center">
                        <img src={ELECTRIAL} alt="ELECTRIAL" className=' w-32 text-center' />
                        <h4>ELECTRIAL-PARTS</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;