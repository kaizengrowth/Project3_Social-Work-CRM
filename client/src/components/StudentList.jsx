import React from 'react';

class StudentList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isPriority: null,
      isResolved: null,
      inProgress: null,
    }
  }

  render(){
    return (
      <div className = 'studentList'>
        {this.props.studentDataLoaded ?
        <ul className = 'isPriority'>
          {this.props.studentList.map(student
          return (
            {/* Map should return a li item for each student. The key of each li will be the student's id and
            each li will also have a button. When the button is clicked it will invoke the currentprofile method (found on profile controller)
            and pass that student's id as an argument*/}
            <li key = {student.studid}><button className = 'button'
            onClick = {() => this.props.currentProfile(student.studid)}>
            {student.first_name +  " " + student.last_name}</button></li>
          )
        )}
        </ul>
        : (<h2> Still Loading Student Data </h2> )}
    )
  }



}


export default StudentList;
