import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state= {
            email: '',
            password: ''
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
        return(
            <div>
                <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                    <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                    <input type="submit" value='Log in!' />
                </form>
            </div>
        )
    }
}

export default Login;