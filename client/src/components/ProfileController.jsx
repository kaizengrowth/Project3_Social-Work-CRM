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
     studentDataLoaded: false,
     selectedStudent: null,
     loadPage: props.loadPage,
     studentEmail: props.studentEmail
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

  decideWhichToRender() {
    switch (this.state.loadPage) {
      case 'student':
        return <StudentProfileContainer studentDataLoaded={this.state.studentDataLoaded} studentList={this.state.studentList}  studentEmail={this.state.studentEmail}/>;
        break;
      case 'dashboard':
        return <Dashboard studentDataLoaded={this.state.studentDataLoaded} studentList={this.state.studentList} selectedStudent= {this.state.selectedStudent} currentProfile={this.currentProfile} />;
        break;
      // case 'new':
      //   return <IceCreamForm isAdd={true} iceCreamSubmit={this.iceCreamSubmit} />;
      //   break;
      // case 'edit':
      //   return <IceCreamForm isAdd={false} iceCreamSubmit={this.iceCreamSubmit} icecream={this.state.currentIceCream} />
      //   break;
      // default:
      //   return <Redirect push to="/ice-cream" />;
      //   break;
    }
  }


  render(){
    return(
        <div>
        {console.log(this.state.studentList)}
         {this.decideWhichToRender()}
        </div>
    )
  }


}

export default ProfileController;
