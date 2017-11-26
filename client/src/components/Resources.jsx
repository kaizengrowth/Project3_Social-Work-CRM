import React from 'react';

const Resources = (props) => {
  let student = props.studentInfo
  return (
    <div className= 'resources'>
      <div className= 'resources_header'>
      <h2>{student.first_name}, please see the resources below: </h2>
      </div>
    </div>
  )


}

export default Resources
