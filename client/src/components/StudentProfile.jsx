import React from 'react';

const StudentProfile = (props) => {
let student = props.selectedStudent;
  return (
    <div className = 'student_profile'>

    {student ?

      (<div className = 'student_info'>
        <img src = {student.image} alt = '' />
        <h1>{student.first_name + ' ' + student.last_name}</h1>
        <p>Email: {student.email}</p>
        <p>Phone number: {student.phone}</p>
        <p>{student.aboutme}</p>
        <p>Student Notes: {student.studentnotes}</p>
      </div>)

      : (<h1> No Student Selected </h1>)}

    </div>
  )


}

export default StudentProfile
