import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.logout = this.logout.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    componentDidMount() {
        fetch('/api/auth/verify', { credentials: 'include'})
        .then(res => res.json())
        .then(res => {
            this.setState({
                auth: res.auth,
                student: res.student,
            })
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.props.loginSubmit(e, this.state)}>
                    <input type="text" name="username" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} /> <br /> <br /> 
                    <input type="password" name="password" value={this.state.password_digest} placeholder="Password" onChange={this.handleInputChange} /> <br /> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
