import React from 'react';

//FETCH TO API/STUDENTS/EMAIL OR SOME SHIT
//EMAIL MUST MATCH THE USER'S EMAIL?

class StudentProfileContainer extends React.Component{
 constructor(){
   super();
     this.state = {
       APIDATALOADED: false,
       studentInfo: null,
     }

   }

  render(){
    return (
      <div className = 'student_profile'>

      {this.state.studentInfo ?

        <h1>student info </h1>
        // (<div className = 'student_info'>
        //   <img src = {student.image} alt = '' />
        //   <h1>{student.first_name + ' ' + student.last_name}</h1>
        //   <p>Email: {student.email}</p>
        //   <p>Phone number: {student.phone}</p>
        //   <p>{student.aboutme}</p>
        //   <p>Student Notes: {student.studentnotes}</p>
        // </div>)

        : (<h1> Loading Data arghh </h1>)}

      </div>
    )
  }
 }


export default StudentProfileContainer
