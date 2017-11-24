import React from 'react';

//FETCH TO API/STUDENTS/EMAIL OR SOME SHIT
//EMAIL MUST MATCH THE USER'S EMAIL?

class StudentProfileContainer extends React.Component{
 constructor(props){
   super(props);
     this.state = {
       studentList: props.studentList,
       studentEmail: props.studentEmail,
       studentDataLoaded: props.studentDataLoaded,
       studentInfo: null,
     }

   }
   componentDidMount(){
     console.log(this.state.studentList + 'should be an array?')
   }

   studentProfile() {
     //takes data from studentList and returns the student with the studid
     // equal to the id argument. Got this from the wine homework, single page.
      let profile = this.state.studentList.find(student =>{
        return student.email === this.state.studentEmail
      })
      this.setState({
        studentInfo: profile,
      })
    }

  render(){
    return (
      <div>

      {this.state.studentInfo ?
        (<div>
            <h1>student info </h1>
            <div className = 'student_info'>
            <img src = {this.state.studentInfo.image} alt = '' />
            <h1>{this.state.studentInfo.first_name + ' ' + this.state.studentInfo.last_name}</h1>
            </div>
          </div>)

        : (<h1> Loading Data arghh </h1>)}

        </div>
    )
  }
 }


export default StudentProfileContainer
