import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "./loginSignup.css";

function Signup({attemptSignup}){

    const history = useHistory();

    const INITIAL_STATE = { username: "", password: "password", firstName: "", lastName: "", email: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        let res = await attemptSignup(formData);
        if(res === false) alert('Invalid username or password');
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
return(<div className="form-div">
    <h1>Register Here.</h1>
    <form className="form" onSubmit = {handleSubmit}>
        <input id = "username" name = "username" value = {formData.name} onChange = {handleChange} placeholder = "Username"></input>
        <input type = "password" id = "password" name = "password" value = {formData.password} onChange = {handleChange} placeholder = "Password"></input>
        <input id = "firstname" name = "firstName" value = {formData.firstName} onChange = {handleChange} placeholder = "First Name"></input>
        <input id = "lastname" name = "lastName" value = {formData.lastName} onChange = {handleChange} placeholder = "Last Name"></input>
        <input id = "email" name = "email" value = {formData.email} onChange = {handleChange} placeholder = "Email"></input>
        <button className="button-class">Sign Up</button>
    </form>
</div>)


}

export default Signup;