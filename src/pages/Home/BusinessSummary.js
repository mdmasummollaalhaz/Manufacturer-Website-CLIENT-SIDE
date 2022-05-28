import React from 'react';
import SummaryCard from './SummaryCard';
import { FaTools } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BiMoney } from 'react-icons/bi';
import { GiStarsStack } from 'react-icons/gi';

const BusinessSummary = () => {
    return (
        <section>
            <div className="container mx-auto py-16 px-4">
                <h2 className=' text-4xl font-semi-bold text-primary mb-16 text-center'>Business Summary</h2>
                <div className="b-summary grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SummaryCard icon={<HiUserGroup />} numbers='100+' text='Customers we served' />
                    <SummaryCard icon={<BiMoney />} numbers='120M+' text='Annual revenue' />
                    <SummaryCard icon={<GiStarsStack />} numbers='33K+' text='Reviews' />
                    <SummaryCard icon={<FaTools />} numbers='50+' text='Tools' />
                </div>
            </div>

        </section>
    );
};

export default BusinessSummary;