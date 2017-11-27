import React, { Component } from 'react';
import TopNav from './components/TopNav';
import MainNav from './components/MainNav';
import RegistrationForm from './containers/RegistrationForm';
import Home from './containers/Home';
import ProfileController from './components/ProfileController';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            auth: false,
            student: null,
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.logout = this.logout.bind(this);
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
            console.log(res);
            this.setState({
                email: res.email,
                password_digest: res.pas,
            })}).catch(err => console.log(err));
    }

      render() {
        return (
            <Router>
              <div className="App">
                <TopNav loginSubmit={this.handleLoginSubmit}/>
                <MainNav />
                {/* INSERT CONDITIONAL TO REMOVE REGISTRATION BUTTON WHEN USER IS LOGGED IN AND LINKS SHOULD GO INSIDE A HEADER COMPONENT*/}
                <Link to='/register'>
                  <button>Click here to Register</button>
                </Link>
                <Route path="/" exact component={Home} />
                <Route path='/register' exact component={RegistrationForm} />
                <Route exact path="/dashboard" render={props => (<ProfileController loadPage="dashboard" />)}/>
                <Route exact path="/student/:email" render={props => (<ProfileController loadPage="student" studentEmail = {props.match.params.email}/>)}/>
                {/* /student will take you to a page to login if you haven't or straight to your account idk*/}
              </div>
            </Router>
        );
      }
    }

export default App
