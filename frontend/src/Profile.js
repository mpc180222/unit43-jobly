import React, { useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import TokenContext from "./tokenContext";
import "./profile.css";

function Profile({editProfile}){

    

    const history = useHistory();

    const INITIAL_STATE = { username: "", password: "password", firstName: "", lastName: "", email: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        let res = await editProfile(loggedInUser.username, formData);
        if(res === false) alert('Invalid password');
        setFormData(INITIAL_STATE);
        if(res === true) history.push("/");

    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    let loggedInUser = useContext(TokenContext);

    if(!loggedInUser){
  
      return(<div>
        <h2>You must be logged in to edit your profile.</h2>
      </div>)
    }
return(<div className="form-div">
    <h1>Profile</h1>
    <form className="form" onSubmit = {handleSubmit}>
        <label for="username" className="label">Username</label><br></br>
        <input readOnly = {true} id = "username" name = "username" value = {loggedInUser.username} placeholder = "Username"></input><br></br>
        <label for="password">Password</label><br></br>
        <input type = "password" id = "password" name = "password" value = {formData.password} onChange = {handleChange} placeholder = "Confirm Password"></input><br></br>
        <label for="firstname">First Name</label><br></br>
        <input id = "firstname" name = "firstName" value = {formData.firstName} onChange = {handleChange} placeholder = "First Name"></input><br></br>
        <label for="lastname">Last Name</label><br></br>
        <input id = "lastname" name = "lastName" value = {formData.lastName} onChange = {handleChange} placeholder = "Last Name"></input><br></br>
        <label for="email">Email</label><br></br>
        <input id = "email" name = "email" value = {formData.email} onChange = {handleChange} placeholder = "Email"></input><br></br>
        <button className="button-class">Save Changes</button>
    </form>
</div>)


}

export default Profile;