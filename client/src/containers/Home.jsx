import React from 'react';
import TopNav from '../components/TopNav'
import MainNav from '../components/MainNav'
import Banner from '../components/Banner'
import AnimationHeader from '../components/AnimationHeader'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div className="home">
            <TopNav />
            <MainNav />
            <Banner />
            <AnimationHeader />
            <Footer />
        </div>
    )
}

export default Home;
