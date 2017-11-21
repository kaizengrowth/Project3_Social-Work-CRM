import React from 'react';

class RegistrationForm extend React.Component{
  constructor(){
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      class_room: '',
      aboutme: '',
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

  submitEditForm(e, this.state){
    e.preventDefault();
    fetch(`/api/students/`),{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringy(data),
    }).then(() =>
      // INSERT CODE REDIRECT TO INTAKE FORM
    );
  }

  render(){
    return(
      <div>
        <form  onSubmit{(e => this.submitEditForm(e,this.state))} >
          <input type = 'text' name = 'first_name' placeholder = 'First Name' value = {this.state.first_name} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'last_name' placeholder = 'Last Name' value = {this.state.last_name} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'email' placeholder = 'Email' value = {this.state.email} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'phone' placeholder = 'Phone Number' value = {this.state.phone} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'class_room' placeholder = 'Classroom number' value = {this.state.class_room} onChange = {this.handleInputChange} />
          <input type = 'text' name = 'aboutme' placeholder = 'Tell me about yourself' value = {this.state.aboutme} onChange = {this.handleInputChange} />
        </form>
      </div>
    )
  }

}

export default RegistrationForm
