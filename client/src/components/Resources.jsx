import React from 'react';
import Intake from './Intake';

// HAVE DASHBOARD AND STUDENTPROFILECONTAINER EACH SEND A PROP EQUAL TO EITHER STUDENT OR WORKER.
// GIVE A STATE THAT PROP. WORKER GIVES ACCESS TO AN EDIT/ADD BUTTON, STUDENT DOES CAN JUST READ?

const Resources = (props) => {

  // getStudentInfo(){
  //   fetch(`/intake`)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         studentInfo: res.data.intake,
  //         intakeDataLoaded: true,
  //       });
  //     }).catch(err => console.log(err));
  // }

  let student = props.studentInfo
  return (

    <div className= 'resources'>
    <Intake />
  {/*  {student ?
      (<div className= 'resources_header'>
      <h2>{student.first_name}, please see the resources below: </h2>
      </div>)
      : (<h1> No Student Selected </h1>)} */}
    </div>
  )

}

export default Resources
