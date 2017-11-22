import React from 'react';
import Banner from '../components/Banner';
import AnimationHeader from '../components/AnimationHeader';
import RegistrationForm from './RegistrationForm';
import Login from '../components/Login';


const Home = () => {
    return (
        <div className="home">
            <Banner />
            <AnimationHeader />
        </div>
    )
}

export default Home;
