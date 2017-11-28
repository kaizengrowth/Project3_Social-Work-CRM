import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import '../App.css'

const MainNav = () => {
    return (
        <div id="main_nav">
            <a href="resources.html">
                <div id="nav_resources" className="nav_block">
                    Find <br /> Resources
                </div>
            </a>

            <a href="support.html">
                <div id="nav_support" className="nav_block">
                    Get <br /> Support
                </div>
            </a>

            <a href="skills.html">
                <div id="nav_skills" className="nav_block">
                    Share <br /> Skills
                </div>
            </a>

            <a href="network.html">
                <div id="nav_network" className="nav_block">
                    Build <br /> Network
                </div>
            </a>

            <div id="nav_search" class="nav_block">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default MainNav