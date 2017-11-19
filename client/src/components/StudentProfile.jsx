import React from 'react';

const StudentProfile = (props) => {
let student = props.selectedStudent;
  return (
    <div className = 'student_profile'>
      <img src = {student.image} alt = '' />
      <div className = 'student_info'>
        <h1>{{student.first_name} + ' ' + {student.last_name}}</h1>
        <p>Email: {student.email}</p>
        <p>Phone number: {student.phone}</p>
        <p>{student.aboutme}</p>
      </div>
      <h3>Student Notes: {student.studentnotes}</h3>

    </div>
  )


}

export default StudentProfile
