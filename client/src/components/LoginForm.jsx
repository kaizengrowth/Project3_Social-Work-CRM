import React from 'react';

class LoginForm extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  submitLoginForm(e, data){
    e.preventDefault();
    fetch(`/api/auth/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(jsonRes => {
      console.log(data);
    })
  }

  render(){
    return(
      <form onSubmit = {(e => this.submitLoginForm(e , this.data))} >
        <input type = 'text' name = 'email' placeholder = 'E-mail' onChange = {this.handleInputChange} />
        <input type = 'text' name = 'password' placeholder = 'Password' onChange = {this.handleInputChange} />
        <input type = 'submit'/>
      </form>
    )
  }
}

export default LoginForm
