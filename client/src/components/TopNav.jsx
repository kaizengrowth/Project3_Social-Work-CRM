import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import '../App.css'
import Login from './Login'
import Logout from './Logout'

class TopNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const topRight = this.props.auth ? <Logout logout={this.props.logout} />
    : (<a href="#modal_login ">Sign In</a>);

        return(
                <div id="topnav">
                    <Link to='/'>
                        <div id="topnav_left">
                            <img src="/images/logo_header.svg" alt="Per Scholas Logo" />
                        </div>
                    </Link>

                    <div id="topnav_right">    
                        {topRight}
                    </div>

                    <div id="modal_login" className="modal">
                        <div>
                            <a href="#close" title="Close" className="close">X</a>
                            <h2>Sign In</h2><br />

                            <Login loginSubmit={this.props.loginSubmit} />
                            <br />

                            <Link to='/register'>
                                <button>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default TopNav
