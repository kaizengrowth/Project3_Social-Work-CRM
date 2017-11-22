import React from 'react';
import StudentList from '../components/StudentList';
import StudentProfile from '../components/StudentProfile';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

class Dashboard extends React.Component {
 constructor(){
   super();
   this.state = {
     studentList: null,
     studentDataLoaded: false,
     selectedStudent: null,
   }

 }


  render(){
    return(
      <div className = 'dashboard_container'>
        <h1>Social Worker Dashboard</h1>
        <div className = 'profile_list_container'>
          <StudentList studentList = {this.state.studentList} studentDataLoaded = {this.state.studentDataLoaded} currentProfile = {this.currentProfile} />
          <StudentProfile selectedStudent = {this.state.selectedStudent} />
        </div>
      </div>
    )
  }


}

export default Dashboard;
