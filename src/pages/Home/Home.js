import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Categories from './Categories';
import Features from './Features';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <main>
            <Banner />
            <Features />
            <Categories />
            <Parts />
            <BusinessSummary />
            <Reviews />
        </main>
    );
};

export default Home;