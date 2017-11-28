import React from 'react';
import Dashboard from '../containers/Dashboard';
import StudentProfileContainer from '../containers/StudentProfileContainer';
import RegistrationForm from '../containers/RegistrationForm';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

class ProfileController extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     studentList: null,
     studentInfo: {},
     studentDataLoaded: false,
     selectedStudent: null,
     loadPage: props.loadPage,
     studentEmail: props.studentEmail,
     showResources: null,
   }
   this.getStudentList = this.getStudentList.bind(this);
   this.getStudentInfo = this.getStudentInfo.bind(this);
   this.currentProfile = this.currentProfile.bind(this);
   this.getResources = this.getResources.bind(this);

 }

 componentDidMount(){
   if (this.state.studentEmail){
     this.getStudentInfo();
   }
   else{
     this.getStudentList();
   }
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

  getStudentInfo(){
    fetch(`/api/students/${this.state.studentEmail}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          studentInfo: res.data.student,
          studentDataLoaded: true,
        });
      }).then(res => {
        this.getResources(res.data.student.studid)
      }).catch(err => console.log(err));
  }

  getResources(id){
    fetch(`/api/intake/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        this.setState({
          showResources: res.data.intake,
        });
      }).catch(err => console.log(err));
  }

  currentProfile(id){
    //takes data from studentList and returns the student with the studid
    // equal to the id argument. Got this from the wine homework, single page.
     let profile = this.state.studentList.find(student =>{
       return student.studid === id
     })
     console.log(profile)
     this.getResources(id)
     this.setState({
       selectedStudent: profile,
     })
  }


  decideWhichToRender() {
    switch (this.state.loadPage) {
      case 'student':
        return <StudentProfileContainer studentDataLoaded={this.state.studentDataLoaded} studentInfo={this.state.studentInfo} getResources={this.getResources} showResources={this.state.showResources} />;
        break;
      case 'dashboard':
        return <Dashboard studentDataLoaded={this.state.studentDataLoaded} studentList={this.state.studentList} selectedStudent= {this.state.selectedStudent} currentProfile={this.currentProfile} getResources={this.getResources} showResources={this.state.showResources} />;
        break;
    }
  }


  render(){
    return(
        <div>
         {this.decideWhichToRender()}
        </div>
    )
  }


}

export default ProfileController;
