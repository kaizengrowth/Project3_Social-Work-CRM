import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import MainNav from './components/MainNav'
import Banner from './components/Banner'
import AnimationHeader from './components/AnimationHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <MainNav />
        <Banner />
        <AnimationHeader />
      </div>
    );
  }
}

export default App
