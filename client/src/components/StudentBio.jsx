import React from 'react';

const StudentBio = (props) => {
let student = props.selectedStudent;
  return (
    <div className = 'student_bio'>

    {student ?

      (<div className= 'student_bio_container'>
        <div className= 'student_bio_text'>
          <h1>{student.first_name + ' ' + student.last_name}</h1>
          <p>Email: {student.email}</p>
          <p>Phone number: {student.phone}</p>
          <p>{student.aboutme}</p>
          <p>Student Notes: {student.studentnotes}</p>
        </div>
        <img src = {student.image} alt = '' />
      </div>)

      : (<h1> No Student Selected </h1>)}

    </div>
  )


}

export default StudentBio
