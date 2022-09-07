import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CompaniesList from "./CompaniesList";
import JobsList from "./JobsList";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import PageNotFound from "./PageNotFound";
import CompanyDetail from "./CompanyDetail";
import JoblyApi from "./api";


function RoutesMaster({companies, jobs, attemptLogin, attemptSignup, editProfile, applyJob, companySearch}){

    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Home></Home>
                </Route>
                <Route exact path = "/companies">
                    <CompaniesList companies = {companies} companySearch = {companySearch} ></CompaniesList>
                </Route>
                <Route exact path = "/companies/:handle">
                    <CompanyDetail applyJob = {applyJob}></CompanyDetail>
                </Route>
                <Route exact path = "/jobs">
                    <JobsList jobs = {jobs} applyJob = {applyJob}></JobsList>
                </Route>
                <Route exact path = "/profile">
                    <Profile editProfile = {editProfile}></Profile>
                </Route>
                <Route exact path = "/login">
                    <Login attemptLogin = {attemptLogin}></Login>
                </Route>
                <Route exact path = "/signup">
                    <Signup attemptSignup={attemptSignup}></Signup>
                </Route>
                <Route exact path = "/*">
                    <PageNotFound></PageNotFound>
                </Route>

            </Switch>

        </div>
    )


}

export default RoutesMaster;