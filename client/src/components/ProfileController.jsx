import React from 'react';
import Dashboard from '../containers/Dashboard';
import StudentProfile from './StudentProfile';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

class ProfileController extends React.Component {
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
      <div>
        <Route path="/profile" component={StudentProfile} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }


}

export default ProfileController;
