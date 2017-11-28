import React from 'react';
import TopNav from '../components/TopNav';
import MainNav from '../components/MainNav';
import Banner from '../components/Banner';
import AnimationHeader from '../components/AnimationHeader';
import Footer from '../components/Footer';
import RegistrationForm from './RegistrationForm';
import HomeButtons from '../components/Home_buttons';
import Login from '../components/Login';
import Intake from '../components/Intake';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <AnimationHeader />
            <HomeButtons />
            <Footer />
        </div>
    )
}

export default Home;
