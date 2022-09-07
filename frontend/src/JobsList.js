import React, {useContext} from "react";
import JobCard from "./JobCard";
import TokenContext from "./tokenContext";
import "./jobList.css"

function JobsList({jobs, applyJob}){
    let loggedInUser = useContext(TokenContext);
   if(loggedInUser) return(

    <div className="container-div">
    <h1>This is jobs list</h1>
    
    {jobs.map(j=> <JobCard title = {j.title}
    id = {j.id} salary = {j.salary} equity = {j.equity} companyName = {j.companyName} 
    applyJob = {applyJob} username = {loggedInUser.username} applications = {loggedInUser.applications} ></JobCard> )}
</div>)

return(
    <div>
    <h2>You must be logged in to view jobs.</h2>
    </div>
)


}

export default JobsList;