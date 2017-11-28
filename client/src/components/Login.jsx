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
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        this.props.loginSubmit(e, this.state);
        this.setState({
            doRedirect: true
        })
    }

    render() {
        if (this.state.doRedirect) {
            return (
                <Redirect to={`/student/${this.state.username}`}/>
            );
        } else {
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} /> <br />
                        <input type="password" name="password" value={this.state.password_digest} placeholder="Password" onChange={this.handleInputChange} />
                        <button type="submit"> Login </button>
                    </form>
                </div>
            )
        }   
    }
}

export default Login;
