import React from 'react';

const StudentProfile = (props) => {
  let student = props.studentInfo;
  return(
    <div className= 'student_profile'>
    {student ?
      (<div className='student_info'>
        <div>
          <h1>{student.first_name + ' ' + student.last_name}</h1>
          <br />
          <p>{'E-mail: ' + student.email}</p>
          <p>{'Phone: ' + student.phone}</p>
          <br />
          <p>{student.aboutme}</p>
        </div>
        <img src={student.image} alt='' />
      </div>)
      : (<h3> Loading Student Information </h3>)}
    </div>
  )
}

export default StudentProfile