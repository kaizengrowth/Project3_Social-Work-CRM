import React from 'react';

//FETCH TO API/STUDENTS/EMAIL OR SOME SHIT
//EMAIL MUST MATCH THE USER'S EMAIL?

const StudentProfileContainer = (props) => {
  console.log(props.studentInfo.first_name + ' datainfo')
  console.log(props.studentDataLoaded + 'data')

  return (
      <div>
      {props.studentDataLoaded ?
        (<div>
            <h1>student info </h1>

          </div>)

        : (<h1> Loading Data arghh </h1>)}

        </div>
    )
  }



export default StudentProfileContainer
