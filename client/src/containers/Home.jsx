import React from 'react';
import TopNav from '../components/TopNav';
import MainNav from '../components/MainNav';
import Banner from '../components/Banner';
import AnimationHeader from '../components/AnimationHeader';
import RegistrationForm from './RegistrationForm';

const Home = () => {
    return (
        <div className="home">
            <TopNav />
            <MainNav />
            <Banner />
            <AnimationHeader />
            <RegistrationForm />
        </div>
    )
}

export default Home;
