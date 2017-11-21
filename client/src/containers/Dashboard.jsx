import React from 'react';
import TopNav from '../components/TopNav'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import StudentList from '../components/StudentList'
import StudentProfile from '../components/StudentProfile'

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <TopNav />
            <MainNav />
            <StudentList />
            <StudentProfile />
            <Footer />
        </div>
    )
}

export default Dashboard;