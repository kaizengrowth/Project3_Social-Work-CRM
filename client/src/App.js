import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav'
import MainNav from './components/MainNav'
import Banner from './components/Banner'
import AnimationHeader from './components/AnimationHeader'
import ProfileController from './components/ProfileController'

class App extends Component {
  render() {
    return (
      <div className="App">
    {/*    // <TopNav />
        // <MainNav />
        // <Banner />
        // <AnimationHeader /> */}
        <ProfileController />
      </div>
    );
  }
}

export default App
