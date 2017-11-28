import React from 'react';

class StudentList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listOfStudents: 'inProgress',
    }
    // this.showInProgress = this.showInProgress.bind(this);
    // this.showIsResolved = this.showIsResolved.bind(this);
  }

  // showInProgress(){
  //   this.setState({
  //     listOfStudents: 'inProgress',
  //   })
  // }
  //
  // showIsResolved(){
  //   this.setState({
  //     listOfStudents: 'isResolved',
  //   })
  // }
  //
  //Need to Render two buttons one for each method above
  //Depending on the state, InProgress will render or IsResolved will render
  //Before doing all that, make sure this page currently works.

  render(){
    return (
      <div className = 'student_list'>

        {this.props.studentDataLoaded ?
          /* Did the data load? If so render the two types of list below*/

        /* List of students that are a priority */
        (<ul className = 'list_by_priority'>
            <div className = 'is_priority'>
              <h3>Students with Priority</h3>
              {this.props.studentList.map(student => {
                return (
                  /* This will return li items for only students that are a priority. The key of each li will be the student's id and
                  each li will also have a button. When the button is clicked it will invoke the currentprofile method (found on profile controller)
                  and pass that students id as an argument*/
                  <div>
                  {student.ispriority ?
                    (<li key = {student.studid}>
                      <button onClick = {() => this.props.currentProfile(student.studid)}> {student.first_name +  " " + student.last_name} </button>
                    </li>)
                  : null}
                  </div>
                )
              })}
            </div>
            <div className = 'not_priority'>
              <h3>Students without Priority</h3>
              {this.props.studentList.map(student => {
                return (
                  /* To check if they are not a priority. */
                  <div>
                    {student.ispriority === false ?
                      (<li key = {student.studid}>
                        <button onClick = {() => this.props.currentProfile(student.studid)}> {student.first_name +  " " + student.last_name} </button>
                       </li>)
                    : null}
                  </div>
                )
              })}
            </div>
          </ul>)
        /*If the student data didnt load, render the below h2*/
        : (<h2> Still Loading Student Data </h2>)}
      </div>
    )
  }

}

export default StudentList;
