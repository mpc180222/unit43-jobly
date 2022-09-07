import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import TokenContext from "./tokenContext";
import "./navbar.css"

function Navbar({logout}) {
    let loggedInUser = useContext(TokenContext);
    
  
    return(
        <div class = "navbar-div">
            <ul><li></li>
            <li class = "home-li"><NavLink className = "home-link" to ="/">Jobly</NavLink></li>
            {loggedInUser && <li><button class = "logout-li" onClick = {logout}>Logout {loggedInUser.username}</button></li>}
            <li><NavLink className = "link" to ="/jobs">Jobs</NavLink></li>
            <li><NavLink className = "link" to ="/companies">Companies</NavLink></li>
            <li><NavLink className = "link" to ="/profile">Profile</NavLink></li>
            {!loggedInUser && <li><NavLink className = "link" to ="/login">Login</NavLink></li>}
            {!loggedInUser && <li><NavLink className = "link" to ="/signup">Signup</NavLink></li>}
            
            </ul>
            
            {loggedInUser && <h4>Logged in as {loggedInUser.username}. Hi {loggedInUser.firstName}</h4>}
        </div>
    )

}

export default Navbar;