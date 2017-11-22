import React from 'react';
import TopNav from '../components/TopNav';
import MainNav from '../components/MainNav';
import Banner from '../components/Banner';
import AnimationHeader from '../components/AnimationHeader';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const Home = () => {
    return (
        <div className="home">
            <TopNav />
            <MainNav />
            <Banner />
            <AnimationHeader />
            <LoginForm />
            <RegistrationForm />
        </div>
    )
}

export default Home;
