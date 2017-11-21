import React from 'react';
import TopNav from '../components/TopNav'
import MainNav from '../components/MainNav'
import Banner from '../components/Banner'
import AnimationHeader from '../components/AnimationHeader'

const Home = () => {
    return (
        <div className="home">
            <TopNav />
            <MainNav />
            <Banner />
            <AnimationHeader />
        </div>
    )
}

export default Home;