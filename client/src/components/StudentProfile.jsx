import React from 'react';

const StudentProfile = (props) => {
  let student = props.studentInfo;
  return(
    <div className= 'student_profile'>
      <div className='student_info'>
        <div>
          <h1>{student.first_name + ' ' + student.last_name}</h1>
          <p>{'E-mail: ' + student.email + '   ' + 'Phone: ' + student.phone}</p>
          <p>{student.aboutme}</p>
          {/* ACTUALLY MAYBE THIS WILL ONLY SHOW UP ON THE SOCIAL WORKERS PAGE?? */}
          <p>{student.studentnotes}</p>
        </div>
        <img src={student.image} alt='' />  
      </div>
    </div>
  )
}

export default StudentProfile
