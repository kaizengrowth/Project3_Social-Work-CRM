import React from 'react';

const Resources = (props) => {
  let student = props.studentInfo
  return (

    <div className= 'resources'>
    {student ?
      (<div className= 'resources_header'>
      <h2>{student.first_name}, please see the resources below: </h2>
      </div>)
      : (<h1> No Student Selected </h1>)}
    </div>
  )


}

export default Resources
