import React from 'react'
import '../App.css'

const Footer = () => {
    return(
        <div className="footer">
            <div id="footer_contact">
                <img src="images/logo_header.svg" />
                <h3>NEW YORK</h3>
                <p>804 E 138th St Bronx, NY 10454 <br> 630 Flushing Ave Brooklyn, NY 11206</p>
            </div>
    
            <div id="footer_links">
                <a href="resources.html">Find Resources.</a><br />
                <a href="support.html">Get Support.</a><br />
                <a href="skills.html">Share Skills.</a><br />
                <a href="network.html">Build Network.</a><br />
                <div id="footer_copyright">
                    <!--
                    <p>By <a href="https://spiritkaizen.org">Kai Lin Zhang</a>, CodeBridge Cohort #6. <br />
                    Original <a href="https://perscholas.org">Per Scholas</a> website design by <a href="https://familiar-studio.com">Familiar</a>.</p>
    -->
                </div>
            </div>
    
            <div id="footer_social">
                <a href="http://cfp-dc.org/nonprofits/1621/Per-Scholas"><img src="images/cfp.png" style="width:65px;" /></a>
                <a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=12043#.Vmm6GRorLvs"><img src="images/charityNavigator.png" /></a>
                <br />
                <img src="images/Blank_Space.png" style="height:35px;" />
                <a href="https://twitter.com/perscholas"><img src="images/twitter.png" style="width: 50px" /></a>
                <a href="https://www.facebook.com/PerScholas"><img src="images/facebook.png" style="width: 51px" /></a>
                <a href="https://www.instagram.com/perscholas/"><img src="images/instagram.png" style="width: 52px" /></a>
            </div>
            <br />
        
        </div>
    )
}

export default Footer