import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import "./loginSignup.css";

function Login({attemptLogin}){

    const history = useHistory();

    const INITIAL_STATE = { username: "testuser", password: "password"}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        let res = await attemptLogin(formData);
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
    <h1>Please Login</h1>
    <form className="form" onSubmit = {handleSubmit}>
        <input id = "username" name = "username" value = {formData.name} onChange = {handleChange} placeholder = "Username"></input>
        <input type = "password" id = "password" name = "password" value = {formData.password} onChange = {handleChange} placeholder = "Password"></input>
        <button className="button-class">Login</button>
    </form>
</div>)


}

export default Login;