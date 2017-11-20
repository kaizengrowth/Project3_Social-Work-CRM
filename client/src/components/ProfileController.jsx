import React from 'react';
import StudentList from './StudentList'

class ProfileController extends React.Component {
 constructor(){
   super();
   this.state = {
     studentList: null,
     studentDataLoaded: false,
   }
   this.getStudentList = this.getStudentList.bind(this);

 }

 componendDidMount(){
   this.getStudentList();
 }

 getStudentList() {
   //this will need to be adjusted depending on how we set up routes and server.js on backend
    fetch('api/students')
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

  render(){
    return(
      <div className = 'profileContainer'>
        <StudentList studentList = {this.state.studentList} studentDataLoaded = {this.state.studentDataLoaded} />

      </div>
    )
  }


}

export default ProfileController;
