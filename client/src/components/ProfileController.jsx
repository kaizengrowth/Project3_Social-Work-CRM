import React from 'react';
import Dashboard from '../containers/Dashboard';
import StudentProfileContainer from '../containers/StudentProfileContainer';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

class ProfileController extends React.Component {
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
      <Router>
        <div>
          <Route path="/api/students/:id" component={StudentProfileContainer} />
          <Route path="/api/students" render={() => (<Dashboard studentDataLoaded={this.state.studentDataLoaded} students={this.state.studentList} profile= {this.state.selectedStudent}/>)}/>
        </div>
      </Router>
    )
  }


}

export default ProfileController;
