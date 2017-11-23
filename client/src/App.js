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
        // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        // this.logout = this.logout.bind(this);
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

    // handleRegisterSubmit(e, data) {
    //     e.preventDefault();
    //     console.log(data);
    //     fetch('/api/auth/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     }).then(res => res.json())
    //     .then(res => {
    //         this.setState({
    //             auth: res.auth,
    //         }).catch(err => console.log(err));
    // }

      render() {
        return (
            <Router>
              <div className="App">
                <TopNav />
                <MainNav />
                <Link to='/register'>
                  <button>Click here to Register</button>
                </Link>
                <Route path="/" exact component={Home} />
                <Route path='/register' exact component={RegistrationForm} />
                <ProfileController />
              </div>
            </Router>
        );
      }
    }


export default App
