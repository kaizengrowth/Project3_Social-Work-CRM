import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ProfileController from '../components/ProfileController';
import Home from '../containers/Home';

class Intake extends React.Component{
  constructor(){
    super();
    this.state = {
    // intakedate: '',
    intakenotes: '',
    housing: '',
    food: '',
    finances: '',
    domesticviolence: '',
    childcare: '',
    mentalhealth: '',
    legalsvcs: '',
    substanceabuse: '',
    physicalhealth: '',
    jobsearch: '',
    completehighschool: '',
    completecollege: '',
    advdegree: '',
    testingaccommodations: '',
    transportation: '',
    insurance: '',
    studentexpectations: '',
    nextsteps: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitEditForm = this.submitEditForm.bind(this);
  }
handleInputChange(e) {
  const name = e.target.name;
  const val = e.target.value;
  this.setState({
    [name]: val,
  });
}

submitEditForm(e, data){
  e.preventDefault();
  fetch(`/api/intake/`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then(jsonRes => {
    console.log(jsonRes)
    this.setState({
      studentRegistered: true,

    })
 })
}

  render() {
    return(
      <Router>
        <div>
          <h1>Resources</h1>
            <div className = 'int_form_container'>
              <form className = 'int_form' onSubmit = {(e => this.submitEditForm(e, this.state))} >
                {/*<input className = 'intake_input' type = 'date' name = 'intakedate' placeholder = 'Todays Date' value = {this.state.intakedate} onchange = {this.handleInputChange} /><br/>*/}
                <input className = 'intake_input' type = 'boolean' name = 'housing' placeholder = 'Do you need help with Housing?  Enter T or F' value = {this.state.housing.value} onchange = {this.handleInputChange} /> <br/>
                <input className = 'intake_input' type = 'boolean' name = 'food' placeholder = 'Do you need help with Food? Enter T or F' value = {this.state.food.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'finances' placeholder = 'Do you need help with Finances/Benefits? Enter T or F' value = {this.state.finances.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'domesticviolence' placeholder = 'Are you in a Domestic Violence situation? Enter T or F' value = {this.state.domesticviolence.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'childcare' placeholder = 'Do you need help with childcare? Enter T or F' value = {this.state.childcare.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'mentalhealth' placeholder = 'Do you need Mental Health support? Enter T or F' value = {this.state.mentalhealth.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'legalsvcs' placeholder = 'Do you need Legal Services? Enter T or F' value = {this.state.legalsvcs.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'substanceabuse' placeholder = 'Do you need help with Substance Abuse? Enter T or F' value = {this.state.substanceabuse.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'physicalhealth' placeholder = 'Do you need help with Health Care? Enter T or F' value = {this.state.physicalhealth.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'jobsearch' placeholder = 'Do you need help with your Job Search? Enter T or F' value = {this.state.jobsearch.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'completehighschool' placeholder = 'Have you completed High School? Enter T or F' value = {this.state.completehighschool.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'completecollege' placeholder = 'Have you completed College? Enter T or F' value = {this.state.completecollege.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'advdegree' placeholder = 'Have you completed an advanced degree? Enter T or F' value = {this.state.advdegree.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'transportation' placeholder = 'Do you need help with Transportation? Enter T or F' value = {this.state.transportation.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'insurance' placeholder = 'Do you need help with insurance? Enter T or F' value = {this.state.insurance.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'testingaccommodations' placeholder = 'Do you help with testing accommodations? Enter T or F' value = {this.state.testingaccommodations.value} onchange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'text' name = 'studentexpectations' placeholder = 'What are your expectations?' value = {this.state.studentexpectations.value} onchange = {this.handleInputChange} /><br/>
  {/*              <input className='intake_input' type = 'hidden' name = 'email' value = */}
                <input lassName = 'intake_submit' type='submit' />
                </form>
              </div>
            </div>
         </Router>
      )
  }
}

export default Intake;
