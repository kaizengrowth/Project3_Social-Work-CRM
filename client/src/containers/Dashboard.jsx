import React from 'react';
import StudentList from '../components/StudentList';
import StudentBio from '../components/StudentBio';
import Referrals from '../components/Referrals';
import Resources from '../components/Resources';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

const Dashboard = (props) => {
  return(
    <div className = 'dashboard_container'>
      <h2>Social Worker Dashboard</h2>
      <div className = 'profile_list_container'>
        <StudentList studentList={props.studentList} studentDataLoaded={props.studentDataLoaded} selectedStudent={props.selectedStudent} currentProfile={props.currentProfile} />
        <StudentBio selectedStudent={props.selectedStudent} />
      </div>
      <div className='resources_referrals_container'>
      {console.log(props.selectedStudent)}
      {props.selectedStudent ?
        <div>
        <Resources studentInfo={props.selectedStudent}/>
        <Referrals />
        </div>
        : (<h2> No student Selected </h2>)}
      </div>
    </div>
  )
}

export default Dashboard;
