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

 }



  render(){
    return(
      <div>
        <Dashboard />
        <Route path="/profile" component={StudentProfileContainer} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }


}

export default ProfileController;
