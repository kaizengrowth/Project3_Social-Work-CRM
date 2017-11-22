import React from 'react';
import { Redirect } from 'react-router-dom';

class RegistrationForm extends React.Component{
  constructor(){
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password_digest: '',
      phone: '',
      cycle: '',
      aboutme: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  submitRegisterForm(e, data){
    e.preventDefault();
    fetch(`/api/students/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(jsonRes => {
      console.log(data);
      console.log(jsonRes);
    })
  }

  render(){
    return(
      <div>
        <form  onSubmit = {(e => this.submitRegisterForm(e, this.state))} >
          <input type = 'text' name = 'first_name' placeholder = 'First Name' value = {this.state.first_name} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'last_name' placeholder = 'Last Name' value = {this.state.last_name} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'email' placeholder = 'Email' value = {this.state.email} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'password_digest' placeholder = 'Password' value = {this.state.password_digest} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'phone' placeholder = 'Phone Number' value = {this.state.phone} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'cycle' placeholder = 'Cohort Name' value = {this.state.cycle} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'aboutme' placeholder = 'Tell me about yourself' value = {this.state.aboutme} onChange = {this.handleInputChange} />
          <input type = 'hidden' name = 'ispriority' value = {false} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default RegistrationForm
