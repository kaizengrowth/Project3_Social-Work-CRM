import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone: '',
      cycle: '',
      aboutme: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
          <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange}  />
          <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange}  />
          <input type="first_name" name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.handleInputChange} />
          <input type="last_name" name="last_name" value={this.state.last_name} placeholder="Last Name" onChange={this.handleInputChange} />
          <input type="cycle" name="cycle" value={this.state.first_name} placeholder="Per Scholas Cycle Number" onChange={this.handleInputChange} />
          <input type="phone" name="phone" value={this.state.phone} placeholder="Phone Number" onChange={this.handleInputChange} />
          <input type="aboutme" name="aboutme" value={this.state.aboutme} placeholder="A paragraph describing how you're doing!" onChange={this.handleInputChange} />
          <input type="submit">Register</input>
        </form>
      </div>
    )
  }
}

export default Register;