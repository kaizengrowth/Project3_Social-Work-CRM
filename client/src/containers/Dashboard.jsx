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
   this.getStudentList = this.getStudentList.bind(this);
   this.currentProfile = this.currentProfile.bind(this);
 }

 componentDidMount(){
   this.getStudentList();
 }

 getStudentList() {
   //this will need to be adjusted depending on how we set up routes and server.js on backend
    fetch('/api/students')
      .then(res => res.json())
      .then(res => {
        this.setState({
          //the below will need to be adjusted to match however studentcontroller returns data
          // but this is similar set up to how its usually been handled in class examples
          studentList: res.data.students,
          studentDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  currentProfile(id){
    //takes data from studentList and returns the student with the studid
    // equal to the id argument. Got this from the wine homework, single page.
     let profile = this.state.studentList.find(student =>{
       return student.studid === id
     })
     this.setState({
       selectedStudent: profile,
     })

    // or is it better to do another fetch like below?
    // fetch(`api/students/{id}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       selectedStudent: res,
    //     });
    //   }).catch(err => console.log(err));
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
