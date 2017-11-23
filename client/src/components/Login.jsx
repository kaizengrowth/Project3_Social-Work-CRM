import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state= {
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        // this.logout = this.logout.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    // componentDidMount() {
    //     fetch('/api/auth/verify', { credentials: 'include'})
    //     .then(res => res.json())
    //     .then(res => {
    //         this.setState({
    //             auth: res.auth,
    //             student: res.data.student,
    //         })
    //     }).catch(err => console.log(err));
    // }

    // handleLoginSubmit(e, data) {
    //     e.preventDefault();
    //     fetch('/api/auth/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         credentials: 'include',
    //         body: JSON.stringify(data),
    //     }).then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             auth: res.auth,
    //             student: res.data.student,
    //         }).catch(err => console.log(err));
    //     })
    // }

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