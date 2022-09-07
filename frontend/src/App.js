import React, { useState, useEffect } from 'react';
import './App.css';
// import jwt from 'jwt-decode';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import RoutesMaster from "./RoutesMaster";
import Navbar from "./Navbar";
import JoblyApi from "./api";
import TokenContext from "./tokenContext";
import useLocalStorage from './useLocalStorage';


function App() {
  const [token, setToken] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


  // useEffect to retrieve the list of companies after render
  useEffect(() => {
    async function getCompanies(){
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, [])
// useEffect to retrieve all jobs after render
  useEffect(() => {
    async function getJobs(){
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, [])
  // useEffect to search local storage for token

  useEffect(() => {
   async function getTokenFromLocalStorage(){
      let storedToken = localStorage.getItem("token");
      if(storedToken){setToken(storedToken);
      let tokenData = parseJwt(storedToken);
      let userData = await JoblyApi.retrieveUserData(tokenData.username, storedToken);
      setLoggedInUser(userData);
    }
    }
    getTokenFromLocalStorage();
  },[token])

  async function attemptLogin(formData){
    let userData = await JoblyApi.authLogin(formData);
    if(userData) {
       setToken(userData.token);
      localStorage.setItem("token", userData.token);
       setLoggedInUser(userData);
      return true;
    }
    else {return false};
}

async function logout(){
  let res = await JoblyApi.authLogout();
    setToken(null);
    localStorage.removeItem('token');
    setLoggedInUser(null);
}

async function attemptSignup(formData){
  let userData = await JoblyApi.authSignup(formData);
  if(userData){
    setToken(userData.token);
    localStorage.setItem("token", userData.token);
    setLoggedInUser('user',userData);
    return true;
  }
  else{return false};
}

async function editProfile(username, formData){
  let response = await JoblyApi.editUser(username, formData, token);
  let storedToken = localStorage.getItem("token");
  setToken(null);
  setToken(storedToken);
}

async function applyJob(username,id){
  let response = await JoblyApi.applyForJob(username, id, token);
  let storedToken = localStorage.getItem("token");
  setToken(null);
  setToken(storedToken);

}

async function companySearch(data){
  let term = data.search;
  if(typeof term !== 'string') term = '';
  let searchCompanies = await JoblyApi.companyNameSearch(term);
  setCompanies(searchCompanies);
}


  return (
    <div className="App">
      <BrowserRouter>
      <TokenContext.Provider value = {loggedInUser}>
      <Navbar logout = {logout} />
      <RoutesMaster companies = {companies} jobs = {jobs} attemptLogin = {attemptLogin} attemptSignup = {attemptSignup} 
      editProfile = {editProfile} applyJob = {applyJob} companySearch = {companySearch} />
      </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
