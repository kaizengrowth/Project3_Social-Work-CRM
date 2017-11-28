import React from 'react';
import Intake from './Intake';

// HAVE DASHBOARD AND STUDENTPROFILECONTAINER EACH SEND A PROP EQUAL TO EITHER STUDENT OR WORKER.
// GIVE A STATE THAT PROP. WORKER GIVES ACCESS TO AN EDIT/ADD BUTTON, STUDENT DOES CAN JUST READ?

class Resources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showResources: this.props.showResources
    }
  }

  render(){
    return (

      <div className= 'resources'>
      <Intake  studentInfo = {this.props.studentInfo} showResourcesOrForm = {this.props.showResourcesOrForm}/>
    {/*  {student ?
        (<div className= 'resources_header'>
        <h2>{student.first_name}, please see the resources below: </h2>
        </div>)
        : (<h1> No Student Selected </h1>)} */}
      </div>
    )
  }
}

export default Resources
