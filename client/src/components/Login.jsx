import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: '',
            doRedirect: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.logout = this.logout.bind(this);
    }

    handleLoginSubmit(e, data) {
        e.preventDefault();
        fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data),
            }).then(res => res.json())
            .then(res => {
                if (res.auth) {
                    this.setState({
                        email: res.email,
                        password_digest: res.pas,
                        doRedirect: true
                    });
                }
            }).catch(err => console.log(err));
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
        if (this.state.doRedirect) {
            return (
                <Redirect to={`/student/${this.state.username}`}/>
            );
        } else {
            return(
                <div>
                    <form onSubmit={(e) => this.handleLoginSubmit(e, this.state)}>
                        <input type="text" name="username" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} />
                        <input type="password" name="password" value={this.state.password_digest} placeholder="Password" onChange={this.handleInputChange} />
                        <input type="submit" value='Log in!' />
                    </form>
                </div>
            )
        }   
    }
}

export default Login;
