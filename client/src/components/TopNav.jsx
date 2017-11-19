import React from 'react'

const TopNav = () => {
    return(
        <div id="topnav">
            <a href = "index.html" > 
                <div id="topnav_left">
                    {/* <picture> */}
                        {/* <source srcset="images/logo_small.png" media="(max-width: 600px)">
                            <source srcset="images/logo_header.svg"> */}
                                <img src="images/logo_header.svg" alt="Per Scholas Logo" />
                    {/* </picture> */}
                </div>

                <div id="topnav_right">
                    <a href="#modal_login ">Sign In</a>
                </div>

                <div id="modal_login" className="modal">
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        <h2>Sign In</h2><br />
                       
                            <form>
                                Username:
                                <input type="text" name="Username" value="Student" /> <br />
                                    
                                        Password:
                                        <input
                                            type="password"
                                            placeholder="*******"
                                            pattern="\w{8}"
                                            title="8 character password" />
                                            <a href="user.html">
                                                <button type="button">Log In</button>
                                            </a>
                            </form><br />
            
                                            <a href="register.html" className="register_link">Register for an Account.</a>
                                        </div>
                                    </div>
                            </a>
        </div>
    )
}

export default TopNav