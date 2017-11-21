import React from 'react';
import TopNav from '../components/TopNav'
import MainNav from '../components/MainNav'
import Banner from '../components/Banner'
import AnimationHeader from '../components/AnimationHeader'
import HomeButtons from '../components/Home_buttons'


const Home = () => {
    return (
        <div className="home">
            <TopNav />
            <MainNav />
            <Banner />
            <AnimationHeader />
            <HomeButtons />
        </div>
    )
}

export default Home;
