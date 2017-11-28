import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ProfileController from '../components/ProfileController';
import Home from '../containers/Home';

class Intake extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    housing: null,
    food: null,
    finances: null,
    domesticviolence: null,
    childcare: null,
    mentalhealth: null,
    legalsvcs: null,
    substanceabuse: null,
    physicalhealth: null,
    jobsearch: null,
    completehighschool: null,
    completecollege: null,
    advdegree: null,
    testingaccommodations: null,
    transportation: null,
    insurance: null,
    studentexpectations: '', //this is an empty string because the type is a string in the table, or something idk
    studid: this.props.studentInfo.studid
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitEditForm = this.submitEditForm.bind(this);
  }

handleInputChange(e) {
  const name = e.target.name;
  const val = e.target.value;
  console.log(e)
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
    this.props.showResources();
 })
}

  render() {
    return(
      <Router>
        <div>
          <h1>Resources</h1>
            <div className = 'int_form_container'>
              <form className = 'int_form' onSubmit = {(e => this.submitEditForm(e, this.state))} >
                <input className = 'intake_input' type = 'boolean' name = 'housing' placeholder = 'Do you need help with Housing?  Enter T or F' value = {this.state.housing} onChange = {this.handleInputChange} /> <br/>
                <input className = 'intake_input' type = 'boolean' name = 'food' placeholder = 'Do you need help with Food? Enter T or F' value = {this.state.food} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'finances' placeholder = 'Do you need help with Finances/Benefits? Enter T or F' value = {this.state.finances} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'domesticviolence' placeholder = 'Are you in a Domestic Violence situation? Enter T or F' value = {this.state.domesticviolence} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'childcare' placeholder = 'Do you need help with childcare? Enter T or F' value = {this.state.childcare} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'mentalhealth' placeholder = 'Do you need Mental Health support? Enter T or F' value = {this.state.mentalhealth} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'legalsvcs' placeholder = 'Do you need Legal Services? Enter T or F' value = {this.state.legalsvcs} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'substanceabuse' placeholder = 'Do you need help with Substance Abuse? Enter T or F' value = {this.state.substanceabuse} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'physicalhealth' placeholder = 'Do you need help with Health Care? Enter T or F' value = {this.state.physicalhealth} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'jobsearch' placeholder = 'Do you need help with your Job Search? Enter T or F' value = {this.state.jobsearch} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'completehighschool' placeholder = 'Have you completed High School? Enter T or F' value = {this.state.completehighschool} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'completecollege' placeholder = 'Have you completed College? Enter T or F' value = {this.state.completecollege} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'advdegree' placeholder = 'Have you completed an advanced degree? Enter T or F' value = {this.state.advdegree} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'transportation' placeholder = 'Do you need help with Transportation? Enter T or F' value = {this.state.transportation} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'insurance' placeholder = 'Do you need help with insurance? Enter T or F' value = {this.state.insurance} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'boolean' name = 'testingaccommodations' placeholder = 'Do you help with testing accommodations? Enter T or F' value = {this.state.testingaccommodations} onChange = {this.handleInputChange} /><br/>
                <input className = 'intake_input' type = 'text' name = 'studentexpectations' placeholder = 'What are your expectations?' value = {this.state.studentexpectations.value} onChange = {this.handleInputChange} /><br/>

                <input lassName = 'intake_submit' type='submit' />
                </form>
              </div>
            </div>
         </Router>
      )
  }
}

export default Intake;
