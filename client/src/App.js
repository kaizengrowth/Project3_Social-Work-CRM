import React, { Component } from 'react';
import TopNav from './components/TopNav';
import MainNav from './components/MainNav';
import RegistrationForm from './containers/RegistrationForm';
import Intake from './components/Intake'
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
        this.logout = this.logout.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.submitEditForm = this.submitEditForm.bind(this);
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
                if (res.auth) {
                    this.setState({
                        email: res.email,
                        password_digest: res.pas,
                        doRedirect: true
                    });
                }
            }).catch(err => console.log(err));
    }

  submitEditForm(e, data){
    e.preventDefault();
    fetch(`/api/students/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(jsonRes => {
      this.setState({
        studentRegistered: true,
        redirectPath: `/student/${jsonRes.data.student.email}`,
      });
    }).catch(err => console.log(err));
  }

  logout() {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
        })
      }).catch(err => console.log(err));
  }

      render() {
        // const RegForm = (props) => {
        //     return (
        //         <RegistrationForm submitEditForm={this.submitEditForm.bind(this)}/>
        //         )
        // }

        return (
            <Router>
              <div className="App">
                <TopNav loginSubmit={this.handleLoginSubmit}/>
                <MainNav />
                <Route path="/" exact component={Home} />
                <Route path='/register' exact render={props => (<RegistrationForm submitEditForm={this.submitEditForm}/>)} />
                <Route path='/intake' exact component={Intake} />
                <Route exact path="/dashboard" render={props => (<ProfileController loadPage="dashboard" />)}/>
                <Route exact path="/student/:email" render={props => (<ProfileController loadPage="student" studentEmail = {props.match.params.email}/>)}/>
                {/* /student will take you to a page to login if you haven't or straight to your account idk*/}
              </div>
            </Router>
        );
      }
    }

export default App
