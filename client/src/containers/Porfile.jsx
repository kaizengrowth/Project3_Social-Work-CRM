import React from 'react';
import TopNav from '../components/TopNav'
import MainNav from '../components/MainNav'
import Banner from '../components/Banner'
import AnimationHeader from '../components/AnimationHeader'
import Footer from '../components/Footer'
import StudentProfile from '../components/StudentProfile'

const Profile = (props) => {
    return (
        <div className="profile">
            <TopNav />
            <MainNav />
            <Banner />
            <AnimationHeader />
            <Footer />
        </div>
    )
}

export default Profile;