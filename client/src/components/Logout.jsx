import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component{
    constructor(props){
        super(props);
    }

    render(){  
        return(
            <button id="logout" onClick={this.props.logout}>Sign Out</button>
        )
    }
}

export default Logout;