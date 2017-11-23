import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password_digest: ''
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
                student: res.data.student,
            })
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.props.loginSubmit(e, this.state)}>
                    <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} />
                    <input type="password" name="password_digest" value={this.state.password_digest} placeholder="Password" onChange={this.handleInputChange} />
                    <input type="submit" value='Log in!' />
                </form>
            </div>
        )
    }
}

export default Login;
